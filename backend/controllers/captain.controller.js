const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blacklistModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname,email,password,vehicle} = req.body;

    const isCaptainAlreadyRegistered = await captainModel.findOne({ email });
    if (isCaptainAlreadyRegistered) {
        return res.status(400).json({ message: 'Captain already registered with same email' });
    }

    const hashpassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password:hashpassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ message: 'Captain registered successfully', token, captain });

}


module.exports.loginCaptain = async(req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({ email }).select('+password');
    if(!captain){
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = captain.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ message: 'Login successful', token, captain });
}



module.exports.getCaptainProfile = async(req,res,next) => {
    res.status(200).json({ message: 'Captain profile fetched successfully', captain: req.captain });
}


module.exports.logoutCaptain = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistModel.create({token});
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
}
