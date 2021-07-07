const language = require('../../config/language')

const CookContent = require('../../models/cook')

const community = async (req, res, next) =>{
    try {
        if(req?.session?.language === 'arm'  ){
            return  res.render('userContent/community', {
                staticData:language[1]
            })
        }
        return res.render('userContent/community', {
            staticData:language[0]
        })

    }catch (e) {
        next(e)
    }
}

const communityRegister = async (req,res,next) =>{
    try {
        const { name, surname ,address, email, phone, desc, facebook, instagram, youtube, referral} = req.body;
        const cookContent = new CookContent({
            name,
            surname,
            address,
            email,
            phone,
            desc,
            facebook,
            instagram,
            youtube,
            referral
        })
        await cookContent.save();
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
    community,
    communityRegister
}