import firebase from "./firebase";

const db = firebase.firestore();

const guardarPedidosfs = async ( pedidoObj ) => 
await 
db.collection('Pedidos').doc().set(
        pedidoObj
)
.then((response) => {
        return response;
})
.catch((error) => {
        console.error("Error writing document: ", error);
});

export default guardarPedidosfs; 
