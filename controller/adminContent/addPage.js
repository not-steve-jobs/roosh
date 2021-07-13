const PageContent = require('../../models/page')

const registerPage = async (req, res, next) => {
    try{
        res.render('adminContent/addPage', {})
    } catch (e) {
        next(e)
    }
}

const registerPageContent = async (req,res,next) =>{
    try {
        const { url, title ,desc, desc1, desc2} = req.body;
        const { filename, path } = req.file;
        const userContent = new PageContent({
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
    registerPage,
    registerPageContent
}