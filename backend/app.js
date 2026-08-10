require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const connectToDb = require('./db/db');

const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

connectToDb();

const allowedOrigins = [
    'http://localhost:5173',
    process.env.FRONTEND_URL
].filter(Boolean);

app.use(
    cors({
        origin: function (origin, callback) {

            // Allow Postman
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            console.log('Blocked CORS origin:', origin);

            return callback(new Error('Not allowed by CORS'));
        },
        credentials: true
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app;