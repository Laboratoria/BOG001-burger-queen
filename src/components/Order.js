import React from 'react';
import { P, H2 } from './Styling';
import Button from './button';
import ItemOrder from './ItemOrder'
import Stopwatch from './Stopwatch'
import './Order.scss'
import { updateOrder } from '../firebaseConfig'

export default function Order({ data, rol }) {
  const products = data.products.map((item, i) => (
    <ItemOrder
      key={item.name + i}
      name={item.name}
      quantity={item.quantity}
      price={item.price}
      userRol={rol}
    />
  ));

  const handleDeliver = () => {
    updateOrder(data.idDoc, {
      isDeliver: true,
    })
  }

  let rolBq;
  if (rol) {
    if (data.isDone === false) {
      rolBq = <Stopwatch timeStart={data.date.toDate().getTime()} idDoc={data.idDoc} />
    } else {
      rolBq = (
        <P className="oder-time">
          Tiempo de preparación
          <br />
          {' '}
          {data.time}
        </P>
      )
    }
  } else {
    rolBq = (
      <>
          <div className="order-total">
            <H2>TOTAL</H2>
            <H2>{`$ ${data.total}`}</H2>
          </div>
          <Button cName="btn-default send" text="ENTREGAR" onClick={handleDeliver} />
      </>
    )
  }

  return (
    <article className="order">
      <header>
        <div className="bill-info-number">
          <P className="bill-info-client">{`# ${data.idOrder}`}</P>
        </div>
        <P className="order-client">{`Cliente: ${data.client}`}</P>
      </header>
      <div className="oder-table-container">
      <table className="oder-table">
        <thead>
          <tr>
            <th><H2>Cant</H2></th>
            <th><H2>Producto</H2></th>
            {rol ? <th /> : <th><H2>Precio</H2></th>}
          </tr>
        </thead>
        <tbody>
          {products}
        </tbody>
      </table>
      </div>
      <footer>
        {rolBq}
      </footer>
    </article>
  );
}
