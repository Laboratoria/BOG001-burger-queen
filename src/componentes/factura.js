import React from 'react';

import './styles/factura.css'
import menos from '../images/signo-menos.svg';
function Factura ( props) {
// class Factura extends React.Component{
    //render(){
        const eliminarFactura = (e) => {
            console.log('dando click')
        }
    return(
        <div className="factura1">
          <div className="title">Factura:</div>
          <div className="resumenFactura" id= "rFactura">
          <ul>
                {props.acaVacontador.map((item , index )=> (
                    <li className='listFactr' key = {index}>{item}  <img className='imgMenos' src={menos} alt='imagen' onClick={()=>{eliminarFactura () }}/></li>
                ))}
            </ul>
          </div>
          <div className="total">Total:</div>
        </div>
    )
    //}
}

export default Factura;