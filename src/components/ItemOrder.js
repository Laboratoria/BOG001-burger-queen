import React from "react";
import { P2 } from "./Styling";
import "./ItemOrder.scss";


export default function ItemOrder({ name, price, quantity, id, userRol }) {


  return (
    <div className='item-order'>
      <P2 className="item-order-quantity">{quantity}</P2>
      <P2 className="item-order-name">{name}</P2>
      {userRol ? null :
          <P2 className="">{"$" + price} </P2>
      }
    </div>
  );
}