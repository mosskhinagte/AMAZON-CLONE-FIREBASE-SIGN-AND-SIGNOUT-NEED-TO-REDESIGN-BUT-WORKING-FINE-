import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDk-iPcBT-y-keV0H7tzt3rEpHSRPkZxbg",
    authDomain: "project-13bc4.firebaseapp.com",
    projectId: "project-13bc4",
    storageBucket: "project-13bc4.appspot.com",
    messagingSenderId: "632290290268",
    appId: "1:632290290268:web:8fb89100274a39b229d499",
    measurementId: "G-M5N8X9P5VG"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };