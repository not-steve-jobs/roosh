const page = require('../../models/page');

const inner_portfolio = async (req,res)=>{
    const newUrl = req.params.id;
    const url = await page.findOne({url: newUrl}).lean();
    return res.render('userContent/inner_portfolio', {...url,
        staticData:req.staticData,
        lang: req.session.language || 'en',})
}


module.exports = {
    inner_portfolio
}