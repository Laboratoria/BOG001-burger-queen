import firebase from "./firebase";
const db = firebase.firestore();

export const guardarPedidosfs = ( nombreCliente , orden ) => 
db.collection('Pedidos').doc().set(
    {
        nombreCliente ,
        orden
    }
);