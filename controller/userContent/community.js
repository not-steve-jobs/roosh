const CookContent = require('../../models/cook')
const mailer = require('../../sendMail/nodemailer')
const { CookContentValidate } = require('../../validations/CookContentValidate')

const community = async (req, res, next) =>{
    try {
            return  res.render('userContent/community', {
                staticData:req.staticData,
                lang: req.session.language || 'eng',
            })
    }catch (e) {
        next(e)
    }
}

const communityRegister = async (req,res,next) =>{
    try {
        const {error, value} = CookContentValidate(req.body);
        if (error) {
            console.error('ValidationError', error.message);
            return res.redirect(`/${req.session.language || 'eng'}/community`);
        }
        const message = {
            to: req.body.email,
            subject: 'ROOSH GROUP',
            text: 'congratulations!!! \nYou have successfully registered\n'
        }
        mailer.mailer(message)
        const cookContent = new CookContent({
            ...value
        })
        await cookContent.save();
            return  res.redirect('/')
    }catch (e) {
        next(e)
    }
}


module.exports = {
    community,
    communityRegister
}