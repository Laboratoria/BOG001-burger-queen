import firebase from "./firebase";
const db = firebase.firestore();

export const guardarPedidosfs = ( pedidoObj ) => 
db.collection('Pedidos').doc().set(
        pedidoObj
);