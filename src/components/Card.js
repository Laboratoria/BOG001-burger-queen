import React from "react";
import { H2 } from "./Styling";
import Button from "./Button";
import "./Card.scss";

function Card(props) {

 const burgerCard = ()=>props.name.includes('Hamburguesa') ? true : false

  return (
    <>
      <div className="card">
        <H2 className="card-name">{props.name}</H2>

        <img className="card-info-item" src={props.img} alt="food" />
        <H2 className="card-info-price">{"$ " + props.price}</H2>
         {burgerCard() ?
         <Button cName="card-btn confirm card-options" text="Opciones"></Button> :
         <>
         <input type="number" className="card-info-input" />
        <Button cName="card-btn confirm" text="Agregar"></Button>
        </>
         }
      </div>
    </>
  );
}

export default Card;
