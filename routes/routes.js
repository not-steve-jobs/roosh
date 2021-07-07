const express = require('express')
const router = express.Router()
const passport = require('passport');
const multer  = require('multer')

const {homePage} = require('../controller/userContent/home')
const {community, communityRegister} = require('../controller/userContent/community')
const {blog} = require('../controller/userContent/blog')
const {login} = require('../controller/adminContent/admin')
const {registerContent, registerUserContent} = require('../controller/adminContent/addBlog')
const {adminBlog} = require('../controller/adminContent/adminblog')
const {editPage, updateBlog} = require('../controller/adminContent/editblog')
const {admin_profile} = require('../controller/adminContent/admin_profile')
const {checkIsAuthenticated, forwardAuthenticated} = require('../middleware/auth');
const { generateUrl} = require('../controller/userContent/generateUrl')
const {fileStorageEngine} = require('../controller/adminContent/multer')
const {aboutPage} = require('../controller/userContent/about')
const {homeCook} = require('../controller/adminContent/homeCook')
const { ThisBlog, deleteThisBlog} = require('../controller/adminContent/ThisBlog')
const { changeLanguage } = require('../controller/userContent/language')
const upload = multer({storage: fileStorageEngine})

router.get('/', homePage)
router.get('/about', aboutPage)
router.get('/blog', blog)
router.get('/community', community)
router.get('/admin_profile',checkIsAuthenticated, admin_profile)
router.get('/admin_profile/adminblog',checkIsAuthenticated, adminBlog)
router.get('/admin',forwardAuthenticated, login)
router.get('/admin_profile/addblog',checkIsAuthenticated, registerContent)
router.get('/admin_profile/editblog/:id',checkIsAuthenticated, editPage)
router.get('/admin_profile/homecook',checkIsAuthenticated, homeCook)
router.get('/blog/:id', generateUrl)
router.get('/admin_profile/thisBlog/:id', ThisBlog)

router.post('/login',
    passport.authenticate('local', { successRedirect: '/admin_profile',
        failureRedirect: '/admin' })
);
router.post('/admin_profile/editblog/:id',upload.single('uploadPhoto'), updateBlog)
router.post('/admin_profile/addblog',upload.single('uploadPhoto'), registerUserContent)
router.post('/community', communityRegister)
router.post('/language', changeLanguage);
router.post('/logout', async (req, res, next) =>{
    try {
        if (req.session && req.session['passport'] && req.session['passport']['user']) {
            req.session.destroy((err) => {
                if (err) {
                    return next(err);
                } else {
                    return res.redirect('/admin');
                }
            });
        }
    } catch (e) {
        console.log('userLogOut :' + e.stack);
    }
});

// router.delete('/blog/:id',deleteBlog)
router.delete('/admin_profile/thisBlog/:id', deleteThisBlog)


module.exports = router