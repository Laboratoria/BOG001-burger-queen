import React, {useContext, useState} from "react";
import { H1, H2 } from "../components/Styling";
import Button from "./button";
import "./Modal.scss";
import ReactDom from "react-dom";
import { WeiterContext } from '../WeiterContext'



export default function Modal({ info }) {
  let {isOpen, clickToClose , addProduct , burger }= useContext(WeiterContext);

const [meat, setMeat]=useState('')
const [ extras, setExtras]=useState([])

  const handleInputChanges = (e) => {
    if(e.currentTarget.name === "meat") {
   setMeat(e.currentTarget.id)
    }else{
      setExtras([...extras,  e.currentTarget.id])


    }
  };

const handleClick = () => {
 addProduct ( {
  name: `${burger.name}  ${meat}  ${extras.join(' ')}`,
  quantity: 1,
  price: extras.length > 0 ? (burger.price+ extras.length) :burger.price,
  id :Math.floor(Math.random() * 100)

 } )
 setMeat('');
 setExtras([]);
 clickToClose()
}





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
    <section className="overlay"  >
      <div className="modal">

        <H1 className="modal-title">Escoge la {title[0]}</H1>
        <div className="modal-options">
          {options.map((item, i) => {
            return (

              <label htmlFor={item.name} className="modal-label" key={i}>
                <img
                  src={item.img}
                  alt="Carne de pollo"
                  className="modal-label-img"
                />

                <input type="checkbox" className="modal-label-input"  name="meat" id={item.name}  onChange={(e) => handleInputChanges(e)}/>
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

                <input type="checkbox" className="modal-label-input"  id={item.name} name={item.name} value={item.price}  onChange={(e) => handleInputChanges(e)}/>
                <H2>{item.name + " $ " + item.price}</H2>

              </label>
            );
          })}
        </div>
        <div className="modal-options">
          <Button
            cName="btn-cancel abort"
            text="Cancelar"
            onClick={clickToClose}
          ></Button>
          <Button cName="btn-send send" onClick={handleClick} text="Agregar" type="submit"></Button>
        </div>

      </div>
    </section>,
    document.getElementById("portal")
  );
}
