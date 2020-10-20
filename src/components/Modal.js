import React from "react";
import { H1, H2 } from "../components/Styling";
<<<<<<< Updated upstream
import Button from "./Button";
=======
import Button from "./button";
>>>>>>> Stashed changes
import "./Modal.scss";
import ReactDom from "react-dom";

<<<<<<< Updated upstream
=======
export default function Modal(props) {

const title = props.info.map(section => section.id);
const options = props.info.filter(section => section.id === title[0]).map(section => section.menu).flat();
const toppings = props.info.filter(section => section.id === title[1]).map(section => section.menu).flat();
console.log(props.info)
>>>>>>> Stashed changes



export default  function Modal({info, open, children , onClose}) {

const title = info.map(section => section.id);
const options = info.filter(section => section.id === title[0]).map(section => section.menu).flat();
const toppings = info.filter(section => section.id === title[1]).map(section => section.menu).flat();

// if (!open) return null;
// ReactDom.createPortal
  return   (

    <section className="overlay">
      <div className="modal">
        <H1 className="modal-title">Escoge la {title[0]}</H1>
        <div className="modal-options">
        { options.map((item, i) => {
            return (
        <label htmlFor="" className="modal-label" key={i}>
          <img src={item.img} alt="Carne de pollo" className="modal-label-img" />
          <input type="radio" className="modal-label-input" />
            <H2>{item.name}</H2>
        </label>
            );
        })}
        </div>

        <H1 className="modal-title">Escoge adicionales</H1>
        <div className="modal-options">
        { toppings.map((item, i) => {
            return (
        <label htmlFor="" className="modal-label" key={i}>
          <img src={item.img} alt="Carne de pollo" className="modal-label-img" />
          <input type="radio" className="modal-label-input" />
            <H2>{item.name + ' $ '+ item.price}</H2>
        </label>
            );
        })}
        </div>
        <div className="modal-options" >
        <Button cName="btn-cancel abort" text="Cancelar" onClick={onClose}></Button>
        <Button cName="btn-send send" text="Enviar"></Button>
        {children}
        </div>
      </div>
    </section>
    // document.getElementById("portal")
  );
}
