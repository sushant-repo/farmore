import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6toLAyHRHzg4ZDWUklNgrpRLgZhM07tY",
    authDomain: "farmore-5f1e1.firebaseapp.com",
    projectId: "farmore-5f1e1",
    storageBucket: "farmore-5f1e1.appspot.com",
    messagingSenderId: "32516785791",
    appId: "1:32516785791:web:c150d3cd4cfd2bf9db214a",
    measurementId: "G-K49KXPXK9M"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};