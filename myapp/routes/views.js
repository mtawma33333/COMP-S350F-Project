const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.isLoggedIn)

router.get('/login',viewsController.getLoginForm)
router.get('/signup', viewsController.getSignUp)

router.get('/',function (req, res) {
    res.redirect('/login');
});
router.get('/account', viewsController.getAccount)

router.get('/course', authController.protect, viewsController.getCourse)
router.get('/record', authController.protect, viewsController.getRecord)
router.get('/user', authController.protect, viewsController.getUser)
router.get('/myRecord', authController.protect, viewsController.getMyRecord)

router.get('/course/create', authController.protect, viewsController.getCreateCourse)
router.get('/record/create', authController.protect, viewsController.getCreateRecord)

router.get('/user/:id/update', authController.protect, viewsController.getEditUser)
router.get('/course/:id/update', authController.protect, viewsController.getEditCourse)
router.get('/record/:id/update', authController.protect, viewsController.getEditRecord)

module.exports = router;