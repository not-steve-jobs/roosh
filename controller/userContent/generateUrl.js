const blog = require('../../models/blog');

const generateUrl = async (req,res)=>{
    const {id} = req.params;
        const url = await blog.findOne({url: id}).lean();
        return res.render('userContent/generateUrl', {...url,
            staticData:req.staticData,
            lang: req.session.language || 'en',})
}


module.exports = {
    generateUrl
}