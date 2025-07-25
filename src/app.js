const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const initializeSocket = require("./socket");

const app = express();

// CORS setup
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));

// If you want to test HTTP routes as well
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Create HTTP server and attach Express app
const server = http.createServer(app);

// Initialize Socket.IO with server
initializeSocket(server);

// Start server
server.listen(7000, () => {
    console.log("Server running on port 7000");
});
