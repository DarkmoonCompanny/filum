// Conveniently import this file anywhere to use db
import firebase from "firebase/app";
import 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBE598sHpwCLes2fYKKdD1TtdExoR1K2Mg",
    authDomain: "filum-5f83e.firebaseapp.com",
    databaseURL: "https://filum-5f83e-default-rtdb.firebaseio.com",
    projectId: "filum-5f83e",
    storageBucket: "filum-5f83e.appspot.com",
    messagingSenderId: "467534671798",
    appId: "1:467534671798:web:62924fa440f24c27d85b17",
    measurementId: "G-TC19XYYXYD"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }