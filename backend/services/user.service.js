const userModel = require("../models/user.model");



module.exports.createUser = async ({
    firstname,lastname,eamil,password
}) => {
    if(!firstname || !eamil || !password){
        throw new Error('All fields are required');
    }
    const user = userModel.create({
        fullname:{firstname,lastname},
        eamil,
        password
    })
    return user;
}