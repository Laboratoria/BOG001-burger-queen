import React, { useEffect, useState } from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import Style from '../templates/choosefood.module.css';

const PreparingList = (props) =>{

  // Initialize Cloud Firestore

  const db = firebase.firestore();

  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {

    db.collection("br-orders").onSnapshot(
      (querySnapshot) => {
        const docs = [];
        querySnapshot.forEach(doc => {
          if(doc.data().state === 'preparing'){
            docs.push({...doc.data(), id:doc.id})
          }
        });
        setOrders(docs)
      });

  }

  const [orderDescription, setOrderDescription] = useState (['']);

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
        setOrderDescription(docsData);
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
            <div className={`${Style.stateBoxWarning}`}>
              <h4 className={`${Style.dataState}`}>{order.state}</h4>
            </div>
          </div>
        ))}
        {orderDescription.map((order) => (
          <div key={order.id}>
            <h3>Table # {order.table}</h3>
            <p>{order.state}</p>
            <button>Finished</button>
          </div>
        ))}
    </div>
  )
}

export default PreparingList;
