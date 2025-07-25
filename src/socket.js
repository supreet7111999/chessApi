const socket = require("socket.io");


const roomPlayers = {};

const initializeSocket = (server) => {

    const io = socket(server, {
    cors: {
      origin: "http://localhost:5173",
            methods: ["GET", "POST"],
      credentials: true
    },
  });

  io.on("connection", (socket) => {
    console.log("Connected hogye");
    console.log(socket);
    socket.on("churan", () => {
      console.log("chuan"); // ✅ This should print
    });
    socket.on("disconnect",()=>{
      console.log(socket.id + " disconnected");
    })
    socket.on("joinChat",(roomId)=>{
      // if(!roomPlayers[roomId])
      // {
      //   roomPlayers[roomId]={}
      // }
      console.log(roomId);
    })
  });
  
   
  
};

module.exports = initializeSocket;
