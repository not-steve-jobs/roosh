const userContent = require('../../models/blog')
const fs = require('fs')
const path = require('path')

const dName = path.dirname(require.main.filename || process.mainModule.filename);

const adminBlog = async (req,res,next)=> {
    try{
        const data = await userContent.find({})
        res.render('adminContent/adminblog', {data})
    }catch (e) {
        next(e)
    }
}

// const deleteBlog = async (req,res,next)=> {
//     try{
//         const { id } = req.params;
//         const photoName = await userContent.findOne({_id: id})
//         fs.unlink(`${dName}/public/uploads/${photoName.uploadPhoto}`, (err => {
//             if (err) console.log(err);
//             else {
//                 console.log("\nFile Deleted");
//             }
//         }))
//         await userContent.findByIdAndDelete(id);
//         return res.json({success:true})
//     }catch (e) {
//         next(e)
//     }
// }


module.exports = {
    adminBlog,
    // deleteBlog
}