import React from "react";
import HeaderCocina from "../componentes/HeaderCocina";
// import BotonesPedidos from "../componentes/pedidosCocina";
import '../style/principalCocina.css';
import Check from '../componentes/check'
class PrincipalCocina extends React.Component {
    render() {
        return (
            <div>
                <div className= "Container2"> 
                <HeaderCocina/>
                <div className="grid"> 
                <div className="parteUno">  {/*<BotonesPedidos/>  <BotonesPedidos/> <BotonesPedidos/> <BotonesPedidos/> <BotonesPedidos/> <BotonesPedidos/> <BotonesPedidos>*/} </div>
                <div className="parteDos"> <div className="factura"> <div className="title">RESUMEN PEDIDO:</div><div className="resumenFactura">  LALALA </div></div> </div>
                </div>
                
                </div>
            </div>
        )
    }
};

export default PrincipalCocina