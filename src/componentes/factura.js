import React from "react";

import "./styles/factura.css";
import menos from "../images/signo-menos.svg";

function Factura(props) {
  // class Factura extends React.Component{
  //render(){
  const eliminarFactura = (itemId,index,key) => {
      //console.log(itemId);
      //console.log(index);
      //console.log(key);
      //console.log(key.indexOf((element) => element !== index));
      //let indice = key.indexOf((element) => console.log(element) !== index)
    let nuevoArray = props.acaVacontador.filter(item => item.name !== itemId.name)

    props.setItemsMenu(nuevoArray)
  };

  let total = 0;
  props.acaVacontador.forEach((element) => {
    total += element.price;
  });
  return (
    <div className="factura1">
      <div className="title">Factura:</div>
      <div className="resumenFactura" id="rFactura">
        <ul>
          {props.acaVacontador.map((item, index,key) => (
            <li className="listFactr" key={index}>
              {item.name}{" "}
              <img
                className="imgMenos"
                src={menos}
                alt="imagen"
                onClick={() => {
                  eliminarFactura(item,index,key);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="total">Total: $ {total}</div>
    </div>
  );
  //}
}

export default Factura;
