import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAQbohs-qbcHf1sypMXyQS5INFKO7ooKQI",
    authDomain: "burgerqueen-d2b77.firebaseapp.com",
    databaseURL: "https://burgerqueen-d2b77.firebaseio.com",
    projectId: "burgerqueen-d2b77",
    storageBucket: "burgerqueen-d2b77.appspot.com",
    messagingSenderId: "672034291491",
    appId: "1:672034291491:web:0ee49b57aa163342039696"
  };
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();