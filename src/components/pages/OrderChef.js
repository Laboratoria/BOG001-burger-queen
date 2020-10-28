
import React, {useState, useEffect} from 'react'
import NavBar from "../Navbar";
import { db } from "../../firebaseConfig.js";
import Order from "../Order"


export default function OrderChef() {

const [order, setOrder] = useState([])

  useEffect(() => {
    db.collection('orders')
    .orderBy('date', 'desc')
    .onSnapshot((querySnapshot)=> {
      const arrayData =[]
      querySnapshot.forEach(doc => {
       const data= doc.data()
       if (data.isDone===false){
         const dataObject={client:data.client, products: data.products};
        arrayData.push(dataObject)

     }
    })
    setOrder(arrayData);
  })
  },[])

  console.log(order)



  return (
    <>
    <NavBar rol="chef"/>
    <div  style={{ display: "flex" }}>
    <Order/>
    </div>
    </>
  )
}
