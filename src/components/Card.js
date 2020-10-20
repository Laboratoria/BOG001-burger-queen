import React, { useState } from "react";
import { H2 } from "./Styling";
import Button from "./button";
import "./Card.scss";
import Modal from "./Modal";

function Card(props) {
  // const [isOpen, setIsOpen] = useState(false);
  const initialStateValues = {
    name: "",
    value: "",
  };

  const [values, setCount] = useState(initialStateValues);
  const burgerCard = () => (props.name.includes("Hamburguesa") ? true : false);
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setCount((prev) => {
      return { ...prev, name, value };
    });
  };

  // const handleClick = () => {};

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
            {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            </Modal> */}
          </>
        ) : (
          <>
            <input
              defaultValue={values.value}
              name={props.name}
              type="text"
              className="card-info-input"
              onChange={handleInputChanges}
            ></input>
            <Button cName="card-btn confirm" text="Agregar"></Button>
          </>
        )}
        <p>{values.value}</p>
      </div>
    </>
  );
}

export default Card;
