import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

require('dotenv').config();

const firebaseConfig = {
    apiKey: "AIzaSyB4Qq6UScHGrBQJYQVindvctGlTT4Jfhtw",
    authDomain: "e-comm-42efd.firebaseapp.com",
    projectId: "e-comm-42efd",
    storageBucket: "e-comm-42efd.appspot.com",
    messagingSenderId: "503140276858",
    appId: "1:503140276858:web:4e332fb8264cb415ef79c3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const firestore = firebase.firestore(firebase);
export const firebaseStorage = firebase.storage();