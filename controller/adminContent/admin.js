const login = async (req, res, next) => {
    try {
        res.render('adminContent/admin')
    }catch (e) {
        next(e)
    }
}


module.exports = {
    login,
}