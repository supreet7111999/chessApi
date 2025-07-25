const socket = require("socket.io");
// const cors=require("cors");

const roomPlayers = {};

const initializeSocket = (server) => 
    {
  const io = socket(server, 
    {
    cors: {
      origin: "http://localhost:5173/",
    },
  })
  io.on("connection",(socket)=>{
    console.log("Connected hogye");
    socket.on("churan",()=>{
      console.log("chuan");
    })
  })
}



module.exports=initializeSocket;