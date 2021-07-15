const Menu = require('../../models/addMenu')

const addMenu = async (req, res, next) => {
    try{
        res.render('adminContent/addMenu', {})
    } catch (e) {
        next(e)
    }
}

const registerMenu = async (req, res, next) => {
    try {
        const  {name} = req.body
        const menu = new Menu({
            name
        })
        await menu.save()
        return res.render('adminContent/admin_profile',{})
    } catch (e) {
        next(e)
    }
}


module.exports = {
    addMenu,
    registerMenu
}