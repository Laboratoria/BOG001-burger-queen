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
        <footer>
          <div className="order-total">
            <H2>TOTAL</H2>
            <H2>{`$ ${data.total}`}</H2>
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
          <P className="bill-info-client">{`# ${data.idOrder}`}</P>
        </div>
        <P className="order-client">{`Cliente: ${data.client}`}</P>
      </header>
      <table className="oder-table">
        <thead>
          <tr>
            <th><P>Cant</P></th>
            <th><P>Producto</P></th>
            {rol ? <th /> : <th><P>Precio</P></th>}
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
