import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Counter from '../molecules/Counter';

const CommandMenu = (props) => {

  console.log(props.menuItems)

  // Initialize Cloud Firestore

  const db = firebase.firestore();

  db.collection("br-order").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data().order.item}`);
    });
  });


  function sendOrder() {
    db.collection("orders").add({
      item: "arroz",
      price: 5
    })
    .then(function(docRef) {
      //console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.log("Error adding document: ", error);
    });
  }

  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty.</th>
          <th>Price</th>
          <th>Opt.</th>
        </tr>
      </thead>
      <tbody>
            <tr>
              <td>item</td>
              <td><Counter /></td>
              <td>$ 10 USD</td>
              <td>
                <button> ✖ </button>
              </td>
            </tr>
      </tbody>
    </table>
    <button onClick={sendOrder}>Send to kitchen</button>
    </div>

  )
}

export default CommandMenu;
