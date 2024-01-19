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
        return userRecord; // Return the user record on success
    } catch (error) {

        if (error.code === 'auth/email-already-exists') {
            throw new Error("Email already exists"); // Throw a new error
        }
        // For other errors, throw a generic error or re-throw the original error
        throw new Error("An error occurred while creating the user"); 
    }
};





module.exports = creatingUser;