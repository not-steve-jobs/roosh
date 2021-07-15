const UserContent = require('../../models/blog')
const menuLink = require('../../models/addMenu')

const homePage = async (req, res, next) => {
    try{
        const menuData = await menuLink.find({})
         UserContent.find({})
            .sort({'createdDate' : -1 })
            .limit(10)
            .then((data,err) => {
                if(err) {
                    throw new Error('UserContent Error get')
                }
                res.render('userContent/home', {
                    staticData:req.staticData,
                    lang: req.session.language || 'eng',
                    data,
                    menuData
            });
        })
    }catch (e) {
        next(e)
    }
}
module.exports = {
    homePage
}