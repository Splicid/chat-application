const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const creatingUser = require("./firebaseAuth");
const { type } = require("os");


const app = express();
const httpServer = createServer(app);
const serviceAccount = require("./service_account/chat-auth-232cf-firebase-adminsdk-qjy3e-bf5b60b1f4.json");


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.post("/api/user/register", async (req, res) => {
    const email = req.body.userData.email;
    const password = req.body.userData.password;

    try {
        await creatingUser(email, password); // Use await since creatingUser is async
        res.status(200).send('User created successfully');
    } catch (error) {
        res.status(500).send('Error creating user');
    }

});



// Will continue to work on this later

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