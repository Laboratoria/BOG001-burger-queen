import React, { useState } from "react";
import { H2 } from "./Styling";
import Button from "./button";
import "./Card.scss";
import Modal from "./Modal";

function Card(props) {
<<<<<<< Updated upstream
  const burgerCard = () => (props.name.includes("Hamburguesa") ? true : false);
  const [isOpen, setIsOpen] = useState(false);
=======
  const initialStateValues = {
    name: "",
    value: 0,
  };

  const [values, setCount] = useState(initialStateValues);
  const burgerCard = () => (props.name.includes("Hamburguesa") ? true : false);
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setCount(name, value);
    return { name, value };
  };
>>>>>>> Stashed changes

  const handleClick = () => {
    console.log(handleInputChanges());
  };
  handleClick();
  return (
    <>
      <div className="card">
        <H2 className="card-name">{props.name}</H2>

        <img className="card-info-item" src={props.img} alt="food" />
        <H2 className="card-info-price">{"$ " + props.price}</H2>
        {burgerCard() ? (
<<<<<<< Updated upstream
          <>
            <Button
              cName="card-btn confirm card-options"
              text="Opciones"
              onClick={() => {
               setIsOpen(true)
              }}
            ></Button>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              Fancy Modal
            </Modal>
          </>
        ) : (
          <>
            <input type="number" className="card-info-input" />
            <Button
              cName="card-btn confirm"
              text="Agregar"
            ></Button>
=======
          <Button
            cName="card-btn confirm card-options"
            text="Opciones"
          ></Button>
        ) : (
          <>
            <input
              min="1"
              name={props.name}
              defaultValue="1"
              type="number"
              className="card-info-input"
              onChange={handleInputChanges}
            ></input>
            <Button cName="card-btn confirm" text="Agregar"></Button>
>>>>>>> Stashed changes
          </>
        )}
      </div>
    </>
  );
}

export default Card;
