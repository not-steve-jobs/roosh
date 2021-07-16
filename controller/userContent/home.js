const UserContent = require('../../models/blog')

const homePage = async (req, res, next) => {
    try{
         UserContent.find({})
            .sort({'createdDate' : -1 })
            .limit(10)
            .then((data,err) => {
                if(err) {
                    throw new Error('UserContent Error get')
                }
                res.render('userContent/home', {
                    staticData:req.staticData,
                    lang: req.session.language || 'en',
                    data
            });
        })
    }catch (e) {
        next(e)
    }
}
module.exports = {
    homePage
}