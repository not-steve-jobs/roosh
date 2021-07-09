const languages = require('../config/language')
module.exports = (req, res, next) => {
    try{
        const {language} = req.params
        if (language === 'arm'){
            req.session.language = 'arm'
            req.staticData = languages[1]
        }else {
            req.session.language = 'eng'
            req.staticData = languages[0]

        }
        next()
    }catch (e) {
        next(e)
    }
}
