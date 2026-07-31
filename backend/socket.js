const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const captainModel = require('./models/captain.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            // origin: '*',
                origin: "http://localhost:5173",
            methods: ['GET', 'POST'],
             credentials: true
        }
    });

    io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("join", async (data) => {
    const { userId, userType } = data;

    if (userType === "user") {
        const user = await userModel.findByIdAndUpdate(
            userId,
            { socketId: socket.id },
            { new: true }
        );

        console.log("Join Data:", data);
        console.log("Updated User:", user);
    }

    if (userType === "captain") {
        const captain = await captainModel.findByIdAndUpdate(
            userId,
            { socketId: socket.id },
            { new: true }
        );

        console.log("Updated Captain:", captain);
    }
});

    socket.on("disconnect", (reason) => {
        console.log("Client disconnected:", socket.id);
        console.log("Reason:", reason);
    });
});
}

const sendMessageToSocketId = (socketId, messageObject) => {

console.log("Sending to socket:", socketId);
    console.log("Event:", messageObject.event);
    console.log("Data:", messageObject.data);
    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.log('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };