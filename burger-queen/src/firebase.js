  import firebase from 'firebase/app'
  import  'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAqAxvWY6qn3ZsCavUM531Ppp6_jg2DS-U",
    authDomain: "burger-queen-1bf9b.firebaseapp.com",
    projectId: "burger-queen-1bf9b",
    storageBucket: "burger-queen-1bf9b.appspot.com",
    messagingSenderId: "939094166497",
    appId: "1:939094166497:web:fceda11bf2a899aa99a0a0"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();