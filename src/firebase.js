import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB6Y16dDHyR09mup0YjjlkxIsIOhQTZLvk",
    authDomain: "burgerqueen-ln-fa10b.firebaseapp.com",
    databaseURL: "https://burgerqueen-ln-fa10b.firebaseio.com",
    projectId: "burgerqueen-ln-fa10b",
    storageBucket: "burgerqueen-ln-fa10b.appspot.com",
    messagingSenderId: "44932893073",
    appId: "1:44932893073:web:3be76f069def522b227230"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;