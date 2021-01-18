import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const StockReport = () => {

  // Initialize Cloud Firestore

  const db = firebase.firestore();

  const stock =
    db.collection("br-stock").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().stock}`);
      });
    });
    console.log(stock)

  return (
    <div>
      <button>📦</button>
      <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty.</th>
          <th>Opt.</th>
        </tr>
      </thead>
      <tbody>
            <tr>
              <td>j</td>
              <td>quantity</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
      </tbody>
    </table>
    </div>
  )
}

export default StockReport;
