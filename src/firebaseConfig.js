import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjFetaA7G120-sLi52bzxwNpgojQD76TM",
  authDomain: "burger-queen-ad2b2.firebaseapp.com",
  databaseURL: "https://burger-queen-ad2b2.firebaseio.com",
  projectId: "burger-queen-ad2b2",
  storageBucket: "burger-queen-ad2b2.appspot.com",
  messagingSenderId: "246436894485",
  appId: "1:246436894485:web:891d117eb4325e0465fb1c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

function addBill(data) {
  db.collection("orders").add(data);
}
const updateOrder = async (id, fields) => {
  try {
    await db.collection("orders").doc(id).update(fields);
  } catch (error) {
    console.log(error);
  }
};

export { db, addBill, firebase, updateOrder  };
