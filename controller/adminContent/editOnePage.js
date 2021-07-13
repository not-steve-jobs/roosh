const pageContent = require('../../models/page')
const fs = require('fs')
const path = require('path')

const dName = path.dirname(require.main.filename || process.mainModule.filename);

const editOnePage = async (req, res, next) => {
    try {
        const {id} = req.params.id
        const data = await pageContent.findOne({_id: req.params.id}).lean()
        res.render('adminContent/editPage', {...data})
    }catch (e) {
        next(e)
    }
}

const updatePage = async (req, res, next) => {
    try {
        const { id } = req.params;
        let oldFileName = await pageContent.findOne({_id: id})
        oldFileName = oldFileName.uploadPhoto

        if (req.file !== undefined){
            let { filename } = req.file;
            const { id } = req.params;
            const photoName = await pageContent.findOne({_id: id})
            fs.unlink(`${dName}/public/uploads/${photoName.uploadPhoto}`, (err => {
                if (err) console.log(err);
                else {
                    console.log("\nFile Update in Server and in Base");
                }
            }))
            const data = await pageContent.updateOne({_id: req.params.id}, {
                url: req.body.url,
                title: req.body.title,
                desc: req.body.desc,
                desc1: req.body.desc1,
                desc2: req.body.desc2,
                uploadPhoto: filename
            })
        } else {
            const data = await pageContent.updateOne({_id: req.params.id}, {
                url: req.body.url,
                title: req.body.title,
                desc: req.body.desc,
                desc1: req.body.desc1,
                desc2: req.body.desc2
            })
        }

        res.redirect('/admin_profile')
    }catch (e) {
        next(e)
    }
}


module.exports = {
    editOnePage,
    updatePage
}