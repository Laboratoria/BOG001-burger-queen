import React, { useContext } from 'react'
import NavBar from '../Navbar';
import Order from '../Order'
import { AppContext } from '../../AppContext';

export default function DeliverChef() {
  const { order } = useContext(AppContext);

  const OrderDone = order.filter((orderClient) => orderClient.isDone === true).map((dataOrder, i) => <Order key={`order${i}`} data={dataOrder} rol />)

  return (
    <>
      <NavBar rol="chef" />
      <section style={{ display: 'flex', flexWrap: 'wrap' }}>
        {OrderDone}
      </section>
    </>
  )
}
