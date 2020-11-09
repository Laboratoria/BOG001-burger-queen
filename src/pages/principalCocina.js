import React from "react";
import HeaderCocina from "../componentes/HeaderCocina";
import '../style/principalCocina.css';
import botonesPedidos from "../componentes/pedidosCocina";

class PrincipalCocina extends React.Component {
    render() {
        return (
            <div>
                <div className= "Container"> 
                <HeaderCocina/>
                <div className="grid"> 
                <div className="parteUno"> <botonesPedidos/> <botonesPedidos/> <botonesPedidos/> <botonesPedidos/></div>
                <div className="parteDos">  </div>
                </div>
                
                </div>
            </div>
        )
    }
};

export default PrincipalCocina