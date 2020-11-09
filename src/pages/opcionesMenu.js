import React from "react";
import Header from "../componentes/header";
import '../style/opcionesMenu.css';

class OpcionesMenu extends React.Component {
    render() {
        return (
            <div>
                <div className= "Container"> 
                <Header/>
                <div className="grid"> 
                <div className="zonaImagen"> </div>
                <div className="zonaClase"> </div>
                <div className="zonaBotones"> </div>
                </div>
                
                </div>
            </div>
        )
    }
};

export default OpcionesMenu