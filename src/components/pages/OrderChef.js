
import React, {useState, useEffect, useContext} from 'react'
import NavBar from "../Navbar";
import { AppContext } from "../AppContext";

import Order from "../Order"


export default function OrderChef() {

  let { order } = useContext(AppContext);
 order.map((dataOrder, i

 ))

  return (
    <>
    <NavBar rol="chef"/>
    <div  style={{ display: "flex" }}>
    <Order/>
    </div>
    </>
  )
}
