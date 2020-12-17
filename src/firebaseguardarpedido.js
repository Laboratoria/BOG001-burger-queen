import firebase from "./firebase";

const db = firebase.firestore();

const guardarPedidosfs = ( pedidoObj ) => 
db.collection('Pedidos').doc().set(
        pedidoObj
);

export default guardarPedidosfs; 