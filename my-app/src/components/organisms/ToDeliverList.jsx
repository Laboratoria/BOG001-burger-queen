import React, { useEffect, useState } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import Style from '../templates/choosefood.module.css';

const ToDeliverList = (props) =>{

  // Initialize Cloud Firestore

  const db = firebase.firestore();

  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {

    db.collection("br-orders").onSnapshot(
      (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach(doc => {
          if(doc.data().state === 'toDeliver'){
            docs.push({...doc.data(), id:doc.id})
          }
        });
        setOrders(docs)
      });

  }


  useEffect(() => {
    loadOrders();
  },)

  return(
    <div className={`${Style.statusContent}`}>
        {orders.map((order) => (
          <div className={`${Style.orderCard}`} key={order.id}>
            <h3 className={`${Style.orderTable}`}>Table {order.table}</h3>
          </div>
        ))}
    </div>
  )
}

export default ToDeliverList;
