const express=require("express");
const cors=require("cors");
const http=require("http");
const app=express();
const { Server } = require('socket.io');
const initializeSocket = require("./socket");



app.use(cors({
    origin:"http://localhost:5173/",
    method:["GET","POST"],
    credentials:true
}))
const server=http.createServer();

initializeSocket(server);

server.listen(7000,()=>{
    console.log("Connected")
})

