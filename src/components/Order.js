import React from "react";
import { P, H2 } from "./Styling";
import Button from "./button";
import Item from "./Item"

export default function Order(props) {
  let products = props.data

  return (
    <div className="order">
      <P>Cliente</P>
      <div className="order-id">
        <P className="">#1</P>
      </div>
      <div className="order-title">
        <P>Cant</P>
        <P>Producto</P>
        <P>Precio</P>
      </div>
      {props.rol ? (
        <Button cName="btn-default send" text="Enviar"></Button>
      ) : (
        <>
          <div className="order-total">
            <H2>TOTAL</H2>
            <H2>$</H2>
          </div>
          <Button cName="btn-default send" text="Terminar"></Button>
        </>
      )}
    </div>
  );
}
