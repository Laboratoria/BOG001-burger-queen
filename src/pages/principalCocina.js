import React from "react";
import HeaderCocina from "../componentes/HeaderCocina";
import '../style/principalCocina.css';

class PrincipalCocina extends React.Component {
    render() {
        return (
            <div>
                <div className= "Container"> 
                <HeaderCocina/>
                <div className="grid"> 
                <div className="parteUno"> 'parte Uno'  <botonesPedidos/> <botonesPedidos/> <botonesPedidos/> <botonesPedidos/></div>
                <div className="parteDos">'parte dos' </div>
                </div>
                
                </div>
            </div>
        )
    }
};

export default PrincipalCocina