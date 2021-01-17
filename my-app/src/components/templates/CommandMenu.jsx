import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Counter from '../molecules/Counter';

const CommandMenu = (props) => {

  console.log(props.menuItems)
  const db = firebase.firestore();

  const leerDatos = () => {
      db.collection("orders").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id}`);
      });
    });
    console.log('Funciona');
  }

  function sendOrder() {
    db.collection("orders").add({
      item: "arroz",
      price: 5
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
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
        {
          //Message to indicate empty command
          props.menuItems.length > 0 ?
          props.menuItems.map(menuItem => (
            <tr key={menuItem.id}>
              <td>{menuItem.item}</td>
              <td><Counter /></td>
              <td>$ {menuItem.price} USD</td>
              <td>
                <button onClick={leerDatos}> ✖ </button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={3}>Select items to send to kitchen</td>
            </tr>
          )
        }
      </tbody>
    </table>
    <button onClick={sendOrder}>Send to kitchen</button>
    </div>

  )
}

export default CommandMenu;
