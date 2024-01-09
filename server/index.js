const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});


io.on("connection", (socket) => {
    console.log(socket.id);
});


httpServer.listen(3000);