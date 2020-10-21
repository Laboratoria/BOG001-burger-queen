import React, { useState, useContext } from "react";
import { H2 } from "./Styling";
import Button from "./button";
import "./Card.scss";
import { WeiterContext } from '../WeiterContext'

function Card(props) {
  let {clickToOpen, addProduct} = useContext(WeiterContext);

  // const [isOpen, setIsOpen] = useState(false);
  const initialStateValues = {
    name: props.name,
    quantity: 1,
    price: props.price,
  };

  const [values, setValues] = useState(initialStateValues);
  const[count, setCount] = useState(1);
  const burgerCard = () => (props.name.includes("Hamburguesa") ? true : false);

  const handleInputChanges = (e) => {
    setCount(e.currentTarget.value);
  };


  const handleClick = () => {
    setValues((prev) => {
      return { ...prev, 'quantity': count };
    })
    addProduct(values)
    //localStorage.setItem("values", JSON.stringify(values))
  };
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
              onClick={clickToOpen}
            ></Button>

          </>
        ) : (
          <>
            <input
              value={count}
              name={props.name}
              data-price={props.price}
              type="number"
              className="card-info-input"
              onChange={(e) => handleInputChanges(e)}
            ></input>
            <Button cName="card-btn confirm" text="Agregar" onClick={handleClick}></Button>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
