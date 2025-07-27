const socket = require("socket.io");


let roomPlayers = []
  // roomId:{
  //   white:"",
  //   black:""
  // }
// };

const initializeSocket = (server) => {

    const io = socket(server, {
    cors: {
      origin: "http://localhost:5173",
            methods: ["GET", "POST"],
      credentials: true
    },
  });

  io.on("connection", (socket) => 
    {
    console.log("Connected hogye");
    // console.log(socket);
    // socket.on("churan", () => {
    //   console.log("chuan"); // ✅ This should print
    // });
    socket.on("disconnect",()=>{
      console.log(socket.id + " disconnected");
      const roomId=socket.data.roomId;
      if(!roomId)
        return;
      console.log(roomId);
      let room=roomPlayers.find((room)=>room.roomId===roomId);
      if(room.white==socket.id)
        delete room.white;
      else if(room.black==socket.id)
        delete room.black;
      if(!room.white && !room.black)
        roomPlayers = roomPlayers.filter((r) => r.roomId !== roomId);
      // if(roomPlayers.roomId.white==socket.id)
      //   delete roomPlayers.roomId.white;
      // else if(roomPlayers.roomId.black==socket.id)
      //   delete roomPlayers.roomId.black;
      // else 
      //   delete roomPlayers.roomId;
    })
    socket.on("joinChat", (roomId) => {
      console.log("Joining Room:", roomId);
      socket.data.roomId=roomId;
      let room = roomPlayers.find((room) => room.roomId === roomId);

      if(!room)
      {
        newRoom={
          roomId:roomId,
          white:socket.id,
        }
        roomPlayers.push(newRoom);
        socket.join(roomId);
        io.to(roomId).emit("yourColour","white");
      }
      else{
        // roomPlayers.roomId.black=socket.id;
        // room["black"]=socket.id;
        room.black=socket.id;
        socket.join(roomId);
        io.to(roomId).emit("yourColour","black");
        io.to(roomId).emit("gameStart");
      }

      console.log("Current Room Players:", roomPlayers);
    });

    }
   
  
  )};

module.exports = initializeSocket;
