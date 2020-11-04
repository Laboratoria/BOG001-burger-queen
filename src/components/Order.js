import React from 'react';
import { P, H2 } from './Styling';
import Button from './button';
import ItemOrder from './ItemOrder'
import Stopwatch from './Stopwatch'
import './Order.scss'
import { updateOrder } from '../firebaseConfig'

export default function Order(props) {
  const infoOrder = props.data;
  const products = infoOrder.products.map((item, i) => <ItemOrder key={item.name + i} name={item.name} quantity={item.quantity} price={item.price} userRol={props.rol} />)

  const handleDeliver = () => {
    updateOrder(infoOrder.idDoc, {
      isDeliver: true,
    })
  }

  let rolBq;
  if (props.rol) {
    if (infoOrder.isDone === false) {
      rolBq = <Stopwatch timeStart={infoOrder.date.toDate().getTime()} idDoc={infoOrder.idDoc} />
    } else {
      rolBq = (
        <P className="oder-time">
          Tiempo de preparación
          <br />
          {' '}
          {infoOrder.time}
        </P>
      )
    }
  } else {
    rolBq = (
      <>
        <footer>
          <div className="order-total">
            <H2>TOTAL</H2>
            <H2>{`$ ${infoOrder.total}`}</H2>
          </div>
          <Button cName="btn-default send" text="ENTREGAR" onClick={handleDeliver} />
        </footer>
      </>
    )
  }

  return (
    <article className="order">
      <header>
        <div className="bill-info-number">
          <P className="bill-info-client">{`# ${infoOrder.idOrder}`}</P>
        </div>
        <P className="order-client">{`Cliente: ${infoOrder.client}`}</P>
      </header>
      <table className="oder-table">
        <thead>
          <tr>
            <th><P>Cant</P></th>
            <th><P>Producto</P></th>
            {props.rol ? <th /> : <th><P>Precio</P></th>}
          </tr>
        </thead>
        <tbody>
          {products}
        </tbody>
      </table>
      {rolBq}
    </article>
  );
}
