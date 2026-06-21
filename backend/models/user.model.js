const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken')

const usrSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: ture,
            minlength: [3,'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3,'Last name must be at least 3 characters long'],
        },
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5,'Email must be at least 5 characters long'],
    },

    password: {
        type: String,
        required: true,
        select: false,
    },

    socketId: {
        type: String,
    },
})

userSchema.methods.generateAuthToken = function () {
    const token = JsonWebTokenError.sign({ _id: this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
    
}

userSchema.methods.hashPassword = async function (password) {
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;