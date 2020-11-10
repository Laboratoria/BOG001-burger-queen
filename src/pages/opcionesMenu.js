import React from "react";
import Header from "../componentes/header";
import '../style/opcionesMenu.css';
import combo from "../images/combo.png";
import BotonesOpciones from "../componentes/botonesOpciones"

class OpcionesMenu extends React.Component {
    render() {
        return (
            <div>
                <div className="Container">
                    <Header />
                    <div className="grid">
                        <div className="zonaImagen"> <img src={combo} alt='combo' /></div>
                        <div className="zonaClase"> <div className="bot"> 1 </div> <div className="bot"> 2 </div> <div className="bot"> 3 </div> </div>
                        <div className="zonaBotones"> <BotonesOpciones/> <BotonesOpciones/>  <BotonesOpciones/> </div>
                    </div>

                </div>
            </div>
        )
    }
};

export default OpcionesMenu