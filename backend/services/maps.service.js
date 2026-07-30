const captainModel = require('../models/captain.model');
const axios = require("axios");

const apiKey = process.env.GEOAPIFY_API_KEY;

// Get Coordinates

module.exports.getAddressCoordinate = async (address) => {

    const url =
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${apiKey}`;

    try {

        const response = await axios.get(url);

        if (!response.data.features.length) {
            throw new Error("Address not found");
        }

        const coordinates =
            response.data.features[0].geometry.coordinates;

        return {
            ltd: coordinates[1], // same response as your project
            lng: coordinates[0]
        };

    } catch (err) {
        console.log(err);
        throw err;
    }

};


// Get Distance & Time
module.exports.getDistanceTime = async (origin, destination) => {

    if (!origin || !destination) {
        throw new Error("Origin and destination are required");
    }

    try {

        // Origin Coordinates
        const originData = await module.exports.getAddressCoordinate(origin);

        // Destination Coordinates
        const destinationData =
            await module.exports.getAddressCoordinate(destination);

        const url =
            `https://api.geoapify.com/v1/routing?waypoints=${originData.ltd},${originData.lng}|${destinationData.ltd},${destinationData.lng}&mode=drive&apiKey=${apiKey}`;

        const response = await axios.get(url);

        if (!response.data.features.length) {
            throw new Error("Route not found");
        }

        const properties =
            response.data.features[0].properties;

        return {

            distance: {

                text:
                    (properties.distance / 1000).toFixed(2) + " km",

                value:
                    properties.distance

            },

            duration: {

                text:
                    Math.ceil(properties.time / 60) + " mins",

                value:
                    properties.time

            }

        };

    } catch (err) {

        console.log(err);

        throw err;

    }

};


// Autocomplete
module.exports.getAutoCompleteSuggestions = async (input) => {

    if (!input) {

        throw new Error("Input is required");

    }

    try {

        const url =
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(input)}&apiKey=${apiKey}`;

        const response = await axios.get(url);

        return response.data.features.map(item => item.properties.formatted);

    } catch (err) {

        console.log(err);

        throw err;

    }

};


module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {

    const captains = await captainModel.find({});

    console.log("All Captains:", captains);

    return captains;
}