const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { creatingUser, getId, UserWithEmailAndPassword, customToken } = require("./firebaseAuth");
const { type } = require("os");

const app = express();
const httpServer = createServer(app);
const serviceAccount = require("./service_account/chat-auth-232cf-firebase-adminsdk-qjy3e-bf5b60b1f4.json");
const e = require("express");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/user/register", async (req, res) => {
    try {
        const email = req.body.userData.email;
        const password = req.body.userData.password;

        const userRecord = await creatingUser(email, password);
        res.status(200).send({ userId: userRecord.uid });
        
    } catch (error) {
        res.status(error.code || 500).send(error.message);
    }
});

app.get("/api/user/login", async (req, res) => {
    try {
        const email = req.query.formData.email;
        const password = req.query.formData.password;
        const user = await UserWithEmailAndPassword(email, password);

        if (user) {
            const uid = await getId(email);
            const token = await customToken(uid);
            res.status(200).json({ userToken: token });
        } else {
            res.status(400).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(error.code || 500).send(error.message);
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