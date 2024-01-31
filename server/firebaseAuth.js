const firebase = require("firebase/app");
const admin = require("firebase-admin");
const jwt = require("jsonwebtoken");
const serviceAccount = require("./service_account/chat-auth-232cf-firebase-adminsdk-qjy3e-bf5b60b1f4.json");
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }  = require("firebase/auth");



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
        const uid = userRecord.uid;
        return userRecord; // Return the user record on success
    } catch (error) {

        if (error.code === 'auth/email-already-exists') {
            throw new Error("Email already exists"); // Throw a new error
        }
        // For other errors, throw a generic error or re-throw the original error
        throw new Error("An error occurred while creating the user"); 
    }
};

const UserWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    } catch (error) {
        throw new Error(error.code);

    }
}

const authUser = async (email) => {
    try {
        const user = await admin.auth().getUserByEmail(email);

        return user.uid;
    } catch (error) {
        throw new Error(error);
    }
}

const getId = async (email) => {
    try {
        const user = await admin.auth().getUserByEmail(email);
        return user.uid;
    } catch (error) {
        throw new Error(error);
    }
}

const customToken = async (uid) => {
    try {
        const token = await admin.auth().createCustomToken(uid);
        return token;
    } catch (error) {
        throw new Error(error);
    }
}



module.exports = { creatingUser, authUser, UserWithEmailAndPassword, getId, customToken};