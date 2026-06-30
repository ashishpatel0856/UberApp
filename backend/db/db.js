const mongoose = require("mongoose");

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => {
            console.log("connected to MongoDB successfully");
        })
        .catch((err) => {
            console.error("MongoDB connection failed:");
            console.error(err);
        });
}

module.exports = connectToDb;