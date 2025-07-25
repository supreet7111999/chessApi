const express = require("express");
const cors = require("cors");
const initializeSocket = require("./socket");
const http =require("http");

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

const server = http.createServer(app);
initializeSocket(server);

server.listen(7000, () => {
  console.log("Server running on port 7000");
});
