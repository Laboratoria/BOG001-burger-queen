import React from 'react';

import './styles/factura.css'

function Factura ( props) {
// class Factura extends React.Component{
    //render(){
    return(
        <div className="factura">
          <div className="title">Factura:</div>
          <div className="resumenFactura" id= "rFactura">
          <ul>
                {props.acaVacontador.map((item , index )=> (
                    <li key = {index}>{item}</li>
                ))}
            </ul>
          </div>
          <div className="total">Total:</div>
        </div>
    )
    //}
}

export default Factura;