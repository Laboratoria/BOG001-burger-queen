import React, { useContext, useState } from "react";
import Item from "./Item";
import { P, P2, H2 } from "./Styling";
import Button from "./button";
import { WeiterContext } from "../WeiterContext";
import { firebase, addBill} from '../firebaseConfig'
import "./Bill.scss";

export default function Bill() {
  let { bill, setBill } = useContext(WeiterContext);
  const [client, setClient] = useState(' ');

  let products = bill.map((prod, i) => (
    <Item
      grid="box-grid"
      key={prod.name + i}
      name={prod.name}
      price={prod.price}
      quantity={prod.quantity}
      id={prod.id}
    />
  ));


  const totalBill = bill.reduce((acc, el) => acc + el.price, 0);
    
  const iva = totalBill * 0.1;
  const tax = iva.toFixed(2)
  const totalWithIva = iva + totalBill;

  const handleClient = (e)=> setClient(e.currentTarget.value);


  const handleSend = () => {
  if (client !== ' '){
    const order = {
      client: client,
      products: bill,
      total: totalWithIva,
      isDone: false,
      isDeliver: false,
      date: firebase.firestore.Timestamp.now(),
    }
    addBill(order);
    setBill([])
    setClient(' ')
  } else{
    alert('escribe nombre')
  }
};

const handleCancel = () => {
    setBill([])
    setClient(' ')
};

  return (
    <section className="order">
      <div className="bill">
        <div className="bill-info">
          <P>Cliente</P>
          <label htmlFor="client" className="bill-info-input">
          <input type="text" id="client" value={client} onChange={handleClient}/>
          </label>
          <div className="bill-info-number">
            <P className="bill-info-client">#1</P>
          </div>
        </div>
        <div className="bill-title">
          <P>Cant</P>
          <P>Producto</P>
          <P>Precio</P>
          {products}
        </div>
        <div className="bill-total">
          <P2>IVA(10%)</P2>
          <P2>${tax}</P2>
        </div>
        <div className="bill-total">
          <H2>TOTAL</H2>
          <H2>${totalWithIva}</H2>
        </div>
      </div>
      <div className="bill-botton">
        <Button cName="btn-cancel abort" text="Cancelar" onClick={handleCancel}></Button>
        <Button cName="btn-send send" text="Enviar" onClick={handleSend}></Button>
      </div>
    </section>
  );
}
