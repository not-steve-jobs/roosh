const userContent = require('../../models/blog')
const fs = require('fs')
const path = require('path')

const dName = path.dirname(require.main.filename || process.mainModule.filename);

const adminBlog = async (req,res,next)=> {
    try{
        const data = await userContent.find({})
        res.render('adminContent/adminblog', {data})
    }catch (e) {
        next(e)
    }
}
module.exports = {
    adminBlog,
}