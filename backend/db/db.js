const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECET, { useNewUrlParser: true,
    console.log('connect to db successfully');
    }).catch(err => console.log(err));

}

module.exports = connectToDb;