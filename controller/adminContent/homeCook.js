const cookContent = require('../../models/cook')


const homeCook = async (req,res,next)=> {
    try{
        const data = await cookContent.find({})
        res.render('adminContent/homeCook', {data})
    }catch (e) {
        next(e)
    }
}



module.exports = {
    homeCook
}