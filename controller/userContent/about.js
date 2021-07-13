const fs = require('fs');
const aboutPage = async (req, res, next) => {
    try {

        return  res.render('userContent/about', {
            staticData:req.staticData,
            lang: req.session.language || 'en',
            })
    }catch (e) {
        next(e)
    }
}

module.exports = {
    aboutPage
}