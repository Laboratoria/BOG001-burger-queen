import React from 'react';

import './styles/factura.css'

class Factura extends React.Component{
    render(){
    return(
        <div className="parteDos">
        <div className="factura">
          <div className="title">Factura:</div>
          <div className="resumenFactura"></div>
          <div className="total">Total:</div>
        </div>
      </div>
    )
    }
}

export default Factura;