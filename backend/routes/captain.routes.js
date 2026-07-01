const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authmiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('fullname.firstname').notEmpty().withMessage('First name is required').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').optional().isLength({min: 3}).withMessage('Last name must be at least 3 characters long'), 
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Please use a valid email address'),
    body('password').notEmpty().withMessage('Password is required').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
    body('vehicle.vehicleType').notEmpty().withMessage('Vehicle type is required').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be either car, motercycle or auto'),
    body('vehicle.plate').notEmpty().withMessage('Vehicle plate is required').isLength({min: 3}).withMessage('Vehicle plate must be at least 3 characters long'),
    body('vehicle.capacity').notEmpty().withMessage('Vehicle capacity is required').isInt({min: 1}).withMessage('Vehicle capacity must be at least 1'),
], captainController.registerCaptain);   
   

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
], captainController.loginCaptain);



router.get('/profile',authmiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout',authmiddleware.authCaptain,captainController.logoutCaptain);

module.exports = router;