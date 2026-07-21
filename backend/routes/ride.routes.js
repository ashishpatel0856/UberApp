const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/create',
[
    authMiddleware.authUser,
    body('pickup').isLength({ min: 3 }),
    body('destination').isLength({ min: 3 }),
    body('vehicleType').isIn(['auto', 'car', 'motorcycle']),
],
rideController.createRide
);


module.exports = router;