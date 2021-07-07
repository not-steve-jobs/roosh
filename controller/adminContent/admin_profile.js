const admin_profile = async (req, res, next) => {
    try {
        console.log('Start admin profile get - - - ');
        return res.render('adminContent/admin_profile')
    }catch (e) {
        next(e)
    }
}

module.exports = {
    admin_profile
}