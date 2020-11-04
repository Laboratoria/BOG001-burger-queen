import React, { useContext } from 'react'
import NavBar from '../Navbar';
import { AppContext } from '../../AppContext';
import Order from '../Order'

export default function OrderChef() {
  const { order } = useContext(AppContext);

  const OrderInProcess = order.filter((order) => order.isDone === false).map((dataOrder, i) => <Order key={`order${i}`} data={dataOrder} rol />)

  return (
    <>
      <NavBar rol="chef" />
      <section style={{ display: 'flex', flexWrap: 'wrap' }}>
        {OrderInProcess}
      </section>
    </>
  )
}
