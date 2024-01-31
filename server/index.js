const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const admin = require("firebase-admin");
const { creatingUser, getId, UserWithEmailAndPassword, customToken } = require("./firebaseAuth");
const { type } = require("os");

const app = express();
const httpServer = createServer(app);


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
        console.log(email, password)
        const user = await UserWithEmailAndPassword(email, password);

        if (user) {
            const uid = await getId(email);
            const token = await customToken(uid);
            res.status(200).send({ token: token });
      } else {
          res.status(400).json({ message: "Invalid credentials" });
      }
            
    } catch (error) {
        res.status(error.code || 500).send(error.message);
    }
});

app.post("/sessionLogin", (req, res) => {   
    const idToken = req.body.idToken.toString();
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    admin
      .auth()
      .createSessionCookie(idToken, { expiresIn })
      .then(
        (sessionCookie) => {
          const options = { maxAge: expiresIn, httpOnly: true };
          res.cookie("session", sessionCookie, options);
          res.end(JSON.stringify({ status: "success" }));
        },
        (error) => {
          res.status(401).send("UNAUTHORIZED REQUEST!");
        }
      );
  });


  // TO DO 
    // Add a route to verify the session cookie
    // Add a route to logout the user
    // Add a route to delete the user
    // Add a route to update the user's email
    // Add a route to update the user's password
    // Add a route to update the user's profile
    // Add a route to send a password reset email
    // Add a route to send a verification email
    // Add a route to send a new verification email
    // Add a route to delete the user's profile
    // Add a route to delete the user's account


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