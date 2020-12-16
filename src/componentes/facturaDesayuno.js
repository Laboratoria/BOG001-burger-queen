import React from "react";

import "./styles/factura.css";
import menos from "../images/signo-menos.svg";

function FacturaDesayuno(props) {
 
  const eliminarFactura = (index) => {

    let nuevoArray = props.acaVacontador.filter((item , indice ) => indice !== index)

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
          {props.acaVacontador.map((item, index) => (
            <li className="listFactr" key={index}>
              {item.name}{" "}
              <img
                className="imgMenos"
                src={menos}
                alt="imagen"
                onClick={() => {
                  eliminarFactura(index);
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

export default FacturaDesayuno;
