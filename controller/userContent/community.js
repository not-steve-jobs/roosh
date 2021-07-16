const CookContent = require('../../models/cook')
const mailer = require('../../sendMail/nodemailer')
const { CookContentValidate } = require('../../validations/CookContentValidate')

const community = async (req, res, next) =>{
    try {
            return  res.render('userContent/community', {
                staticData:req.staticData,
                lang: req.session.language || 'en',
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
            return res.status(404).json(error)
        }
        const message = {
            to: req.body.email,
            subject: 'ROOSH GROUP',
            html:
                `
                <h3>congratulations! You are already a 'homecook'</h3>
                <p>your details</p>
                <ul>
                    <li>Name: ${req.body.name} Surname: ${req.body.surname}</li>
                    <li>Address: ${req.body.address} Phone: ${req.body.phone}</li>
                    <li>Cooking level: ${req.body.desc}</li>
                </ul>
                `
        }
        mailer.mailer(message)
        const cookContent = new CookContent({
            ...value
        })
        await cookContent.save();
        return res.redirect(`/${req.session.language || 'en'}/community`);
    }catch (e) {
        next(e)
    }
}


module.exports = {
    community,
    communityRegister
}