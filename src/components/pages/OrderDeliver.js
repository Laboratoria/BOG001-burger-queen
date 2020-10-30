import React, { useContext} from 'react'
import NavBar from "../Navbar";
import { AppContext } from "../../AppContext";
import Order from "../Order"


export default function OrderChef() {

  let { order } = useContext(AppContext);

  let OrderToDeliver = order.filter(order => order.isDone === true && order.isDeliver === false).map((dataOrder, i) => {
    return <Order key={'order'+i} data={dataOrder} rol={false}/>

 })


  return (
    <>
    <NavBar rol="mesero"/>
    <div  style={{ display: "flex" }}>
    {OrderToDeliver}
    </div>
    </>
  )
}

