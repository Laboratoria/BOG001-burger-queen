import React from "react";
import { P, H2 } from "./Styling";
import Button from "./button";
import ItemOrder from "./ItemOrder"
import Stopwatch from "./Stopwatch"
import './Order.scss'

export default function Order(props) {
  let infoOrder = props.data;
  let products = infoOrder.products.map((item, i) => {
    return <ItemOrder key={item.name + i} name={item.name} quantity={item.quantity} price={item.price} userRol={props.rol}/>
  })

  return (
    <div className="order">
      <div className="bill-info-number">
        <P className="bill-info-client">{`# ${infoOrder.idOrder}`}</P>
      </div>
      <P className='order-client'>{'Cliente: ' + infoOrder.client}</P>
      <div className="order-title">
        <P>Cant</P>
        <P>Producto</P>
        {props.rol ? null : <P>Precio</P>}
      </div>
      {products}
      {props.rol ? (
        <>
   
        <Stopwatch timeStart={infoOrder.date.toDate().getTime()}/>
        </>
      ) : (
          <>
            <div className="order-total">
              <H2>TOTAL</H2>
              <H2>{`$ ${infoOrder.total}`}</H2>
            </div>
            <Button cName="btn-default send" text="Entregar"></Button>
          </>
        )}
    </div>
  );
}
