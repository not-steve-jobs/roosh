const blog = require('../../models/blog');
const fs = require('fs')
const path = require('path')

const dName = path.dirname(require.main.filename || process.mainModule.filename);

const ThisBlog = async (req,res)=>{
    const {id} = req.params;
    if (id !== 'favicon.ico'){
        const url = await blog.findOne({url: id}).lean();
        return res.render('adminContent/ThisBlog', {...url})
    }
}

const deleteThisBlog = async (req,res,next)=> {
    try{
        const { id } = req.params;
        const photoName = await blog.findOne({_id: id})
        fs.unlink(`${dName}/public/uploads/${photoName.uploadPhoto}`, (err => {
            if (err) console.log(err);
            else {
                console.log("File Deleted");
            }
        }))
        await blog.findByIdAndDelete(id);
        return res.json({success:true})
    }catch (e) {
        next(e)
    }
}

module.exports = {
    ThisBlog,
    deleteThisBlog
}