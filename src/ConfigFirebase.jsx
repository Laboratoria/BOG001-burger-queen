import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB1CP4UAkddmQaKVtu69-nU5iNqnZ5wq-s",
    authDomain: "burger-queen-a7ace.firebaseapp.com",
    databaseURL: "https://burger-queen-a7ace.firebaseio.com",
    projectId: "burger-queen-a7ace",
    storageBucket: "burger-queen-a7ace.appspot.com",
    messagingSenderId: "489472326459",
    appId: "1:489472326459:web:a3d9f1c8fcb058ca7b551e",
    measurementId: "G-HS40FT2JBX"
};

firebase.initializeApp(firebaseConfig);

export default firebase;