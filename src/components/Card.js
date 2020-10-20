import React, { useState } from "react";
import { H2 } from "./Styling";
import Button from "./button";
import "./Card.scss";


function Card(props) {


  // const [isOpen, setIsOpen] = useState(false);
  const initialStateValues = {
    name: "",
    value: 1,
    price: 0,
  };

  const [values, setCount] = useState(initialStateValues);
  const burgerCard = () => (props.name.includes("Hamburguesa") ? true : false);
  const handleInputChanges = (e) => {

    const { name, value, dataset} = e.target;

    setCount((prev) => {
      return { ...prev, name, value, "price":dataset["price"] };
    });
  };


  const handleClick = () => {
    localStorage.setItem("values", JSON.stringify(values))
  };
   const hola= localStorage.getItem("values");
   const hello = JSON.parse(hola)
   console.log(hello)


  return (
    <>
      <div className="card">
        <H2 className="card-name">{props.name}</H2>

        <img className="card-info-item" src={props.img} alt="food" />
        <H2 className="card-info-price">{"$ " + props.price}</H2>
        {burgerCard() ? (
          <>
            <Button
              cName="card-btn confirm card-options"
              text="Opciones"
              onClick={props.clickToOpen}
            ></Button>

          </>
        ) : (
          <>
            <input
            id="input-card"
              defaultValue= "1"
              name={props.name}
              data-price={props.price}
              type="number"
              className="card-info-input"
              onChange={handleInputChanges}
            ></input>
            <Button cName="card-btn confirm" text="Agregar" onClick={handleClick}></Button>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
