import React, { useContext } from 'react'
import NavBar from "../Navbar";
import Order from "../Order"
import { AppContext } from "../../AppContext";


export default function DeliverChef() {
  let { order } = useContext(AppContext);

  let OrderDone = order.filter(order => order.isDone === true).map((dataOrder, i) => {
    return <Order key={'order' + i} data={dataOrder} rol={true} />
  })

  return (
    <>
      <NavBar rol="chef" />
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        {OrderDone}
      </section>
    </>
  )
}
