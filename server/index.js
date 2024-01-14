const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const creatingUser = require("./firebaseAuth")


const app = express();
const httpServer = createServer(app);


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/user/register", (req, res) => {
    const email = req.body.userData.email;
    const password = req.body.userData.password;
    creatingUser(email, password)
    res.status(200);
});

// const io = new Server(httpServer, { 
//     cors: {
//         origin: "http://localhost:5173",
//         methods: ["GET", "POST"]
//     }
// });


// io.on("connection", (socket) => {
//     socket.on("Hello", (data) => {
//         console.log(data);
//     });
// });


httpServer.listen(3000);