import React, { useState, useContext } from "react";
import { H2 } from "./Styling";
import Button from "./button";
import "./Card.scss";
import { AppContext } from "../AppContext";

function Card(props) {
  let { clickToOpen, addProduct } = useContext(AppContext);

  const [count, setCount] = useState(1);

  const handleInputChanges = (e) => {
    setCount(e.currentTarget.value);
  };
  const handleModal = () => {
    clickToOpen(props.name, props.price);
  };

  const handleClick = () => {
    addProduct({
      name: props.name,
      quantity: parseInt(count),
      price: props.price * count,
      id: Math.floor(Math.random() * 100),
    });
    setCount(1);
  };
  return (
    <>
      <div className="card">
        <H2 className="card-name">{props.name}</H2>

        <img
          className="card-info-item"
          src={props.img}
          alt="food"
          width="auto"
          height="100%"
        />
        <H2 className="card-info-price">{"$ " + props.price}</H2>
        {props.name.includes("Hamburguesa") ? (
          <>
            <Button
              id={props.name}
              cName="card-btn confirm card-options"
              text="Opciones"
              onClick={handleModal}
            ></Button>
          </>
        ) : (
          <>
            <label
              htmlFor={props.name + "quantity"}
              className="card-info-input"
            >
              <input
                value={count}
                name={props.name}
                data-price={props.price}
                type="number"
                onChange={(e) => handleInputChanges(e)}
              ></input>
            </label>
            <Button
              cName="card-btn confirm"
              text="Agregar"
              onClick={handleClick}
            >
              {" "}
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
