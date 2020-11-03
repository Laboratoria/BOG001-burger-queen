import React, { useContext, useState } from "react";
import Item from "./Item";
import { P, P2, H2 } from "./Styling";
import Button from "./button";
import { AppContext } from "../AppContext";
import { firebase, addBill } from "../firebaseConfig";
import "./Bill.scss";

export default function Bill() {
  let { bill, setBill, idOrder } = useContext(AppContext);
  const [client, setClient] = useState(" ");

  let products = bill.map((prod, i) => (
    <Item
      grid="box-grid"
      cName='bill-box'
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
    if (client !== " ") {
      const order = {
        client: client,
        products: bill,
        total: totalWithIva,
        isDone: false,
        isDeliver: false,
        date: firebase.firestore.Timestamp.now(),
        idOrder: idOrder,
      };
      addBill(order);
      setBill([]);
      setClient(" ");
    } else {
      alert("escribe nombre");
    }
  };

  const handleCancel = () => {
    setBill([]);
    setClient(" ");
  };

  return (
    <section className="order-bill">
      <div className="bill">
        <div className="bill-info">
          <div className="bill-info-number">
            <P className="bill-info-client">{`# ${idOrder}`}</P>
          </div>
          <label htmlFor="client">
            <P>Cliente</P>
            <input
              type="text"
              id="client"
              className="bill-info-input"
              value={client}
              onChange={handleClient}
            />
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
          <P2>${tax}</P2>
        </div>
        <div className="bill-total">
          <H2>TOTAL</H2>
          <H2>${totalWithIva}</H2>
        </div>
      </div>
      <div className="bill-botton">
        <Button
          cName="btn-default abort"
          text="CANCELAR"
          onClick={handleCancel}
        ></Button>
        <Button
          cName="btn-default send"
          text="ENVIAR"
          onClick={handleSend}
        ></Button>
      </div>
    </section>
  );
}
