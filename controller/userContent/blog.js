const UserContent = require('../../models/blog')
const blog = async (req,res,next)=> {
    try{
        const perPage = 6
        const page = req.query.page || 1
        UserContent.find({})
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .sort({'createdDate' : -1 })
            .exec(function(err, data) {
                UserContent.countDocuments().exec(function (err, count) {
                    if (err) return console.error(`${err}`);
                        res.render('userContent/blog', {
                            staticData:req.staticData,
                            lang: req.session.language || 'en',
                            data,
                            current: page,
                            pages: Math.ceil(count / perPage),
                        })
                });
            })
    }catch (e) {
        next(e)
    }
}


module.exports = {
    blog
}