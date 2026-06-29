const express = require('express');
const router = express.Router();

const {body} = require("express-validator");
const userController = require('../controllers/user.controller');
const authmiddleware = require('../middlewares/auth.middleware');
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage('first name must be at lealslt 3 characters long'),
    body('password').isLength({min: 6}).withMessage('password must be atleast 6 character'),
    body()
],
userController.registerUser
)


router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage('password must be atleast 6 character'),
],
userController.loginUser
)

router.get('/profile',authmiddleware.authUser, userController.getUserProfile);

module.exports = router;