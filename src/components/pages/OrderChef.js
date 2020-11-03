
import React, { useContext } from 'react'
import NavBar from "../Navbar";
import { AppContext } from "../../AppContext";
import Order from "../Order"


export default function OrderChef() {

  let { order } = useContext(AppContext);

  let OrderInProcess = order.filter(order => order.isDone === false).map((dataOrder, i) => {
    return <Order key={'order' + i} data={dataOrder} rol={true} />

  })


  return (
    <>
      <NavBar rol="chef" />
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {OrderInProcess}
      </section>
    </>
  )
}
