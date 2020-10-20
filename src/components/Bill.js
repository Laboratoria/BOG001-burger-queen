import React from 'react'
import Item from './Item'
import {P, H3, H2} from './Styling'
import Button from "./button"

export default function Bill() {
  return (
    <section className="order">
    <div className= "bill">
      <div className="bill-info">
      <div className="bill-info-number">
       <P className="bill-info-client">#1</P>
      </div>
     <P>Cliente</P>
     <input className="bill-info-input"type="text"/>
     </div>
     <div className="bill-title">
       <H3>Cant</H3>
       <H3>Producto</H3>
       <H3>Precio</H3>
     </div>
     <Item></Item>
     <div className="bill-iva">
     <H3>IVA(10%)</H3>
      <H3>$4</H3>
     </div>
    <div className="bill-total">
     <H2>TOTAL</H2>
     <H2>$39</H2>
    </div>
    </div>
    <Button cName="btn-cancel abort" text="Cancelar"></Button>
   <Button cName="btn-send send" text="Enviar"></Button>
   </section>

  )
}
