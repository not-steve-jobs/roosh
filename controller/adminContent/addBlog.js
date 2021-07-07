const UserContent = require('../../models/blog')

const registerContent = async (req, res, next) => {
    try{
        res.render('adminContent/addBlog', {})
    } catch (e) {
        next(e)
    }
}

const registerUserContent = async (req,res,next) =>{
    try {
        const { url, title ,desc, desc1, desc2} = req.body;
        const { filename, path } = req.file;
        const userContent = new UserContent({
            url,
            title,
            desc,
            desc1,
            desc2,
            uploadPhoto:filename
        })
        await userContent.save();
        return res.render('adminContent/admin_profile',{})
    }catch (e) {
        next(e)
    }
}


module.exports = {
    registerContent,
    registerUserContent
}