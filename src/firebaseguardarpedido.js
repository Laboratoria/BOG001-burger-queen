import firebase from "./firebase";

const db = firebase.firestore();

export const guardarPedidosfs = async ( pedidoObj ) => 
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


export const getAllDocuments = async () => {
        const order = [];
        await db
          .collection("pedidos")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              order.push(doc.data());
            }); // doc.data() is never undefined for query doc snapshots);
          });
          return console.log(order)
      };

      export default {getAllDocuments , guardarPedidosfs}

