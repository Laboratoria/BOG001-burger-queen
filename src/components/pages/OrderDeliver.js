import React, { useContext } from 'react'
import NavBar from '../Navbar';
import { AppContext } from '../../AppContext';
import Order from '../Order'

export default function OrderChef() {
  const { order } = useContext(AppContext);

  const OrderToDeliver = order.filter((order) => order.isDone === true && order.isDeliver === false).map((dataOrder, i) => <Order key={`order${i}`} data={dataOrder} rol={false} />)

  return (
    <>
      <NavBar rol="mesero" />
      <section style={{ display: 'flex', flexWrap: 'wrap', padding: '15px' }}>
        {OrderToDeliver}
      </section>
    </>
  )
}
