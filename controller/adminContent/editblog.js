const blogContent = require('../../models/blog')
const fs = require('fs')
const path = require('path')

const dName = path.dirname(require.main.filename || process.mainModule.filename);

const editPage = async (req, res, next) => {
    try {
        const {id} = req.params.id
        const data = await blogContent.findOne({_id: req.params.id}).lean()
        res.render('adminContent/editblog', {...data})
    }catch (e) {
        next(e)
    }
}

const updateBlog = async (req, res, next) => {
    try {
        const { id } = req.params;
        let oldFileName = await blogContent.findOne({_id: id})
        oldFileName = oldFileName.uploadPhoto

        if (req.file !== undefined){
            let { filename } = req.file;
            const { id } = req.params;
            const photoName = await blogContent.findOne({_id: id})
            fs.unlink(`${dName}/public/uploads/${photoName.uploadPhoto}`, (err => {
                if (err) console.log(err);
                else {
                    console.log("\nFile Update in Server and in Base");
                }
            }))
            const data = await blogContent.updateOne({_id: req.params.id}, {
                url: req.body.url,
                title: req.body.title,
                desc: req.body.desc,
                desc1: req.body.desc1,
                desc2: req.body.desc2,
                uploadPhoto: filename
            })
        } else {
            const data = await blogContent.updateOne({_id: req.params.id}, {
                url: req.body.url,
                title: req.body.title,
                desc: req.body.desc,
                desc1: req.body.desc1,
                desc2: req.body.desc2
            })
        }

        res.redirect('/admin_profile/adminblog')
    }catch (e) {
        next(e)
    }
}


module.exports = {
    editPage,
    updateBlog
}