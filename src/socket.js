const { Server } = require("socket.io");

const roomPlayers = {};

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true
    }
  });

  io.on("connection", (socket) => {
    console.log("Connected hogye");

    socket.on("churan", () => {
      console.log("chuan"); // ✅ This should print
    });
  });
};

module.exports = initializeSocket;
