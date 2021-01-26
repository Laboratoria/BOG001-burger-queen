import React, { useEffect, useState } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import Style from '../templates/choosefood.module.css';

const ToPrepareList = (props) =>{

  // Initialize Cloud Firestore

  const db = firebase.firestore();

  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {

    db.collection("br-orders").onSnapshot(
      (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach(doc => {
          if(doc.data().state === 'to prepare'){
            docs.push({...doc.data(), id:doc.id})
          }
        });
        setOrders(docs)
      });
  }

  const [orderData, setOrderData] = useState (['']);
  const [orderItems, setOrderItems] = useState (['']);

  const loadOrderDescription = async (id) => {
    let idOrder = id;
    console.log(idOrder)
    db.collection("br-orders").onSnapshot(
      (querySnapshot) => {
        const docsData = [];
        querySnapshot.forEach(doc => {
          if(doc.id === idOrder){
            docsData.push({...doc.data(), id:doc.id});
          }
        });
        console.log(docsData)
        setOrderData(docsData);
      });
      db.collection("br-orders").onSnapshot(
        (querySnapshot) => {
          let docsItems = [];
          const docItemLength = docsItems.map.length;
          console.log(docItemLength);
          let i;
          let docItem = '';
          /*
          let index;
          console.log(index)

          for ( let i = 0 ; i < docItemLength ; i++) {
            index += i;
          }
          */
          for (i=0; i < docItemLength; i++) {
            docItem += docsItems[i];
            console.log(docItem)
            console.log(docsItems)
          }

          querySnapshot.forEach(doc => {
            if(doc.id === idOrder){
              docsItems.push(doc.data().order[i]);
            }
          });
          setOrderItems(docsItems);
          console.log(docsItems)
        });
  }

  function changeState (id) {
    let idOrder = id;
    let stateOfOrder = db.collection("br-orders").doc("state");
    console.log (stateOfOrder)

    db.collection("br-orders").onSnapshot(
      (querySnapshot) => {
        querySnapshot.forEach(doc => {
          if(doc.id === idOrder){
            return stateOfOrder.update({
              state: 'preparing'
            })
            .then(function() {
              console.log("Document successfully updated!");
            })
            .catch(function(error) {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });
          }
        });
      });
  }

  useEffect(() => {
    loadOrders();
  },)

  return(
    <div className={`${Style.statusContent}`}>
        {orders.map((order) => (
          <div className={`${Style.orderCard}`} key={order.id} onClick={() => loadOrderDescription (order.id)} >
            <div className={`${Style.tableBox}`}>
              <h3 className={`${Style.dataTable}`}>Table {order.table}</h3>
            </div>
            <div className={`${Style.stateBoxDanger}`}>
              <h4 className={`${Style.dataState}`}>{order.state}</h4>
            </div>
          </div>
        ))}
        {orderData.map((order) => (
          <div key={order.id}>
            <h3>Table # {order.table}</h3>
            <p>{order.state}</p>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity.</th>
                </tr>
              </thead>
              <tbody>
              {orderItems.map((order, i) => {
                return(
                  <tr key={[i]}>
                    <td>{order.item}</td>
                    <td>{order.quantity}</td>
                  </tr>
                )
              })}
              </tbody>
            </table>
            <button onClick={changeState}>Start</button>
          </div>
        ))}
    </div>
  )
};

export default ToPrepareList;
