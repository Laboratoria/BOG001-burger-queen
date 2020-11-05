import React, { useContext, useState } from 'react';
import Item from './Item';
import { P, P2, H2 } from './Styling';
import Button from './button';
import Alert from './Alert'
import { AppContext } from '../AppContext';
import { firebase, addBill } from '../firebaseConfig';
import './Bill.scss';

export default function Bill() {
  const { bill, setBill, idOrder } = useContext(AppContext);
  const [client, setClient] = useState('');
  const [error, setError] = useState('');

  const products = bill.map((prod, i) => (
    <Item
      grid="box-grid"
      cName="bill-box"
      key={prod.name + i}
      name={prod.name}
      price={prod.price}
      quantity={prod.quantity}
      id={prod.id}
    />
  ));

  const totalBill = bill.reduce((acc, el) => acc + el.price, 0);

  const iva = totalBill * 0.1;
  const tax = iva.toFixed(2);
  const totalWithIva = iva + totalBill;

  const handleClient = (e) => setClient(e.currentTarget.value);

  const handleSend = () => {
    if (client !== '') {
      const addOrder = () => {
        const order = {
          client,
          products: bill,
          total: totalWithIva,
          isDone: false,
          isDeliver: false,
          date: firebase.firestore.Timestamp.now(),
          idOrder,
        };
        addBill(order);
        setBill([]);
        setClient('');
        setError('');
      }
      Alert('Seguro que quieres enviar la orden', 'success', false, 'La orden ha sido enviada', addOrder)
    } else {
      setError(<P2 error> Escribe el nombre del cliente</P2>);
    }
  }

  const handleCancel = () => {
    const cleanOrder = () => {
      setBill([]);
      setClient('');
    }
    Alert('Seguro que quieres cancelar la orden', 'error', true, 'La orden ha sido cancelada', cleanOrder)
  };

  return (
    <section className="order-bill">
      <div className="bill">
        <div className="bill-info">
          <div className="bill-info-number">
            <P className="bill-info-client">{`# ${idOrder}`}</P>
          </div>
          <label htmlFor="client">
            <div>
              <P>Cliente</P>
              <input
                type="text"
                id="client"
                className="bill-info-input"
                value={client}
                onChange={handleClient}
              />
            </div>
            {error}
          </label>
        </div>
        <div className="bill-title">
          <P>Cant</P>
          <P>Producto</P>
          <P>Precio</P>
          {products}
        </div>
        <div className="bill-total">
          <P2>IVA(10%)</P2>
          <P2>
            $
            {tax}
          </P2>
        </div>
        <div className="bill-total">
          <H2>TOTAL</H2>
          <H2>
            $
            {totalWithIva}
          </H2>
        </div>
      </div>
      <div className="bill-botton">
        <Button
          cName="btn-default abort"
          text="CANCELAR"
          onClick={handleCancel}
        />
        <Button
          cName="btn-default send"
          text="ENVIAR"
          onClick={handleSend}
        />
      </div>
    </section>
  );
}
