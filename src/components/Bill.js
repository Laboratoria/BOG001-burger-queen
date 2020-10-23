import React, { useContext, useState } from "react";
import Item from "./Item";
import { P, P2, H2 } from "./Styling";
import Button from "./button";
import { WeiterContext } from "../WeiterContext";
import "./Bill.scss";

export default function Bill() {
  let { bill } = useContext(WeiterContext);
  const [sum, setTotal] = useState(0);

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

  const getTotal = () => {
    const totalBill = bill.reduce((acc, el) => acc + el.price, 0);
    return totalBill;
  };

  const iva = getTotal() * 0.1;
  const tax = iva.toString(2)
  const totalWithIva = iva + getTotal();
  console.log(iva);

  return (
    <section className="order">
      <div className="bill">
        <div className="bill-info">
          <P>Cliente</P>
          <input className="bill-info-input" type="text" />
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
        <Button cName="btn-cancel abort" text="Cancelar"></Button>
        <Button cName="btn-send send" text="Enviar"></Button>
      </div>
    </section>
  );
}
