import React from "react";
import { H1, H2 } from "../components/Styling";
import Button from "../components/Button";
import "./Modal.scss";

export default function Modal(props) {
    
const title = props.info.map(section => section.id);
const options = props.info.filter(section => section.id === title[0]).map(section => section.menu).flat();
const toppings = props.info.filter(section => section.id === title[1]).map(section => section.menu).flat();
console.log(props.info)

  return (
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
        <Button cName="btn-cancel abort" text="Cancelar"></Button>
        <Button cName="btn-send send" text="Enviar"></Button>
        </div>
      </div>
    </section>
  );
}
