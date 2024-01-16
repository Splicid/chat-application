const firebase = require("firebase/app");
const admin = require("firebase-admin");
const { getAuth, createUserWithEmailAndPassword }  = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyAXXNGbMqTWxxY7KoCwbPKwsgEspA4kPL8",
    authDomain: "chat-auth-232cf.firebaseapp.com",
    projectId: "chat-auth-232cf",
    storageBucket: "chat-auth-232cf.appspot.com",
    messagingSenderId: "198502798946",
    appId: "1:198502798946:web:5b1fa5f345c662e44e633b",
    measurementId: "G-95GWPHSBYN"
  };

const app = firebase.initializeApp(firebaseConfig);
const serviceAccount = require("./service_account/chat-auth-232cf-firebase-adminsdk-qjy3e-bf5b60b1f4.json");
const auth = getAuth();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Create a new user
const creatingUser = async (email, password) => {
    try {
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password
        });
        console.log(userRecord);
    }catch (error) {
        console.log(error);
    }
}



module.exports = creatingUser;