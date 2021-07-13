const page = require('../../models/page');
const fs = require('fs')
const path = require('path')

const dName = path.dirname(require.main.filename || process.mainModule.filename);

const thisPage = async (req,res)=>{
    const {id} = req.params;
    if (id !== 'favicon.ico'){
        const url = await page.findOne({url: id}).lean();
        return res.render('adminContent/thisPage', {...url})
    }
}

const deleteThisPage = async (req,res,next)=> {
    try{
        const { id } = req.params;
        const photoName = await page.findOne({_id: id})
        fs.unlink(`${dName}/public/uploads/${photoName.uploadPhoto}`, (err => {
            if (err) console.log(err);
            else {
                console.log("File Deleted");
            }
        }))
        await page.findByIdAndDelete(id);
        return res.json({success:true})
    }catch (e) {
        next(e)
    }
}

module.exports = {
    thisPage,
    deleteThisPage
}