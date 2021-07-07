const blog = require('../../models/blog');
const language = require('../../config/language')

const generateUrl = async (req,res)=>{
    const {id} = req.params;
    // console.log(req.params.id)
    if (id !== 'favicon.ico'){
        const url = await blog.findOne({url: id}).lean();
        if(req?.session?.language === 'arm'  ) {
            return res.render('userContent/generateUrl', {...url, staticData:language[1]})
            }
        else return res.render('userContent/generateUrl', {...url, staticData:language[0]})
        }

    }


module.exports = {
    generateUrl
}