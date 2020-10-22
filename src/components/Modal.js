import React, {useContext, useState} from "react";
import { H1, H2 } from "../components/Styling";
import Button from "./button";
import "./Modal.scss";
import ReactDom from "react-dom";
import { WeiterContext } from '../WeiterContext'



export default function Modal({ info }) {
  let {isOpen, clickToOpen}= useContext(WeiterContext);

const [ burger , setBurgerState] = useState({})

  const handleInputChanges = (e) => {
    setCount(e.currentTarget.value);
  };


 

  const title = info.map((section) => section.id);
  const options = info
    .filter((section) => section.id === title[0])
    .map((section) => section.menu)
    .flat();
  const toppings = info
    .filter((section) => section.id === title[1])
    .map((section) => section.menu)
    .flat();
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <section className="overlay">
      <div className="modal">
        <H1 className="modal-title">Escoge la {title[0]}</H1>
        <div className="modal-options">
          {options.map((item, i) => {
            return (
              <label htmlFor="" className="modal-label" key={i}>
                <img
                  src={item.img}
                  alt="Carne de pollo"
                  className="modal-label-img"
                />
                <input type="radio" className="modal-label-input" name="meat" value={item.name}/>
                <H2>{item.name}</H2>
              </label>
            );
          })}
        </div>

        <H1 className="modal-title">Escoge adicionales</H1>
        <div className="modal-options">
          {toppings.map((item, i) => {
            return (
              <label htmlFor={item.name} className="modal-label" key={i}>
                <img
                  src={item.img}
                  alt="Carne de pollo"
                  className="modal-label-img"
                />
                <form action="">
                <input type="radio" className="modal-label-input"  name={item.name} value={item.name} data-price={item.price}/>
                <H2>{item.name + " $ " + item.price}</H2>
                </form>
              </label>
            );
          })}
        </div>
        <div className="modal-options">
          <Button
            cName="btn-cancel abort"
            text="Cancelar"
            onClick={clickToOpen}
          ></Button>
          <Button cName="btn-send send" text="Enviar"></Button>
        </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
}
