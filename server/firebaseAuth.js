const firebase = require("firebase/app");
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

const auth = getAuth();

const creatingUser = async (email, password) => {
    const userRecord = await getAuth().createUser({
        email: email,
        password: password
    })
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}

exports.createUser = creatingUser;