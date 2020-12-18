import firebase from "./firebase";

const listenAllDocs = (callback) => {
  firebase
    .firestore()
    .collection("pedidos")
    .onSnapshot((doc) => {
      const dataArr = doc.docs.map((listTable) => ({
        id: listTable.id,
        ...listTable.data(),
      }));
      callback(dataArr);
    });
};

const getAllDocuments = () => {
  firebase
    .firestore()
    .collection("pedidos")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.data()); // doc.data() is never undefined for query doc snapshots);
    });
};


export { listenAllDocs, getAllDocuments };