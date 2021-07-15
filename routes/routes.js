const express = require('express')
const router = express.Router()
const passport = require('passport');
const multer  = require('multer')

const {homePage} = require('../controller/userContent/home')
const {community, communityRegister} = require('../controller/userContent/community')
const {blog} = require('../controller/userContent/blog')
const {login} = require('../controller/adminContent/admin')
const {registerContent, registerUserContent} = require('../controller/adminContent/addBlog')
const {registerPage, registerPageContent} = require('../controller/adminContent/addPage')
const {adminBlog} = require('../controller/adminContent/adminblog')
const {editPage, updateBlog} = require('../controller/adminContent/editblog')
const {editOnePage, updatePage} = require('../controller/adminContent/editOnePage')
const {admin_profile} = require('../controller/adminContent/admin_profile')
const {checkIsAuthenticated, forwardAuthenticated} = require('../middleware/auth');
const { generateUrl} = require('../controller/userContent/generateUrl')
const {fileStorageEngine} = require('../controller/adminContent/multer')
const {aboutPage} = require('../controller/userContent/about')
const {inner_portfolio} = require('../controller/userContent/inner_portfolio')
const {homeCook} = require('../controller/adminContent/homeCook')
const {addMenu, registerMenu} = require('../controller/adminContent/addMenu')
const { changeLanguage } = require('../controller/userContent/language')
const { ThisBlog, deleteThisBlog} = require('../controller/adminContent/ThisBlog')
const { thisPage, deleteThisPage} = require('../controller/adminContent/thisPage')
const language = require('../middleware/language')

const upload = multer({storage: fileStorageEngine})

router.get('/', (req,res,next) => {
    res.redirect('/en')
})
router.get('/:language/about',language, aboutPage)
router.get('/:language/blog',language, blog)
router.get('/:language/community',language, community)
router.get('/admin_profile',checkIsAuthenticated, admin_profile)
router.get('/admin_profile/adminblog',checkIsAuthenticated, adminBlog)
router.get('/admin',forwardAuthenticated, login)
router.get('/admin_profile/addblog',checkIsAuthenticated, registerContent)
router.get('/admin_profile/addPage',checkIsAuthenticated, registerPage)
router.get('/admin_profile/editblog/:id',checkIsAuthenticated, editPage)
router.get('/admin_profile/homecook',checkIsAuthenticated, homeCook)
router.get('/admin_profile/addMenu',checkIsAuthenticated, addMenu)
router.get('/:language/blog/:id',language, generateUrl)
router.get('/:language',language, homePage)
router.get('/:language/thisPage/:id',language, inner_portfolio)
router.get('/admin_profile/thisBlog/:id', ThisBlog)
router.get('/admin_profile/:id', thisPage)
router.get('/admin_profile/editOnePage/:id',checkIsAuthenticated, editOnePage)

router.post('/login',
    passport.authenticate('local', { successRedirect: '/admin_profile',
        failureRedirect: '/admin' })
);
router.post('/admin_profile/editblog/:id',upload.single('uploadPhoto'), updateBlog)
router.post('/admin_profile/editOnePage/:id',upload.single('uploadPhoto'), updatePage)
router.post('/admin_profile/addblog',upload.single('uploadPhoto'), registerUserContent)
router.post('/admin_profile/addPage',upload.single('uploadPhoto'), registerPageContent)
router.post('/admin_profile/addMenu', registerMenu)
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
router.delete('/admin_profile/:id', deleteThisPage)


module.exports = router