const language = require('../../config/language')
const aboutPage = async (req, res, next) => {
    try {
        if(req?.session?.language === 'arm'  ){
            return  res.render('userContent/about', {
                staticData:language[1]
            })
        }
        return res.render('userContent/about', {
            staticData:language[0]
        })

    }catch (e) {
        next(e)
    }
}

module.exports = {
    aboutPage
}