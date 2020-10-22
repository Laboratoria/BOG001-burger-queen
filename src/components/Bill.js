import React, {useContext} from 'react'
import Item from './Item'
import {P, P2, H2} from './Styling'
import Button from "./button"
import { WeiterContext } from '../WeiterContext'
import  './Bill.scss'


export default function Bill() {
  let {bill}= useContext(WeiterContext);
  console.log(bill)
  let productos = bill.map((prod, i) => <Item key={i} name ></i>)

  return (
    <section className="order">
    <div className= "bill">
      <div className="bill-info">
        <P>Cliente</P>
        <input className="bill-info-input"type="text"/>
      <div className="bill-info-number">
       <P className="bill-info-client">#1</P>
      </div>
     </div>
     <div className="bill-title">
       <P>Cant</P>
       <P>Producto</P>
       <P>Precio</P>
     <Item grid='box-grid'/>
     <Item grid='box-grid'/>
     <Item grid='box-grid'/>

     </div>
     <div className="bill-total">
     <P2>IVA(10%)</P2>
      <P2>$4</P2>
     </div>
    <div className="bill-total">
     <H2>TOTAL</H2>
     <H2>$39</H2>
    </div>
    </div>
    <div className="bill-botton">
    <Button cName="btn-cancel abort" text="Cancelar"></Button>
   <Button cName="btn-send send" text="Enviar"></Button>
   </div>
   </section>

  )
}
