const language = require('../../config/language')
const homePage = async (req, res, next) => {
    try {
        if(req?.session?.language === 'arm'  ){
           return  res.render('userContent/home', {
               staticData:language[1]
           })
        }
        return res.render('userContent/home', {
            staticData:language[0]
        })

    }catch (e) {
        next(e)
    }
}

module.exports = {
    homePage
}