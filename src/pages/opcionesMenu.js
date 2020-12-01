import React from "react";
import Header from "../componentes/header";
import '../style/opcionesMenu.css';
import combo from "../images/combo.png";
import BotonesOpciones from "../componentes/botonesOpciones"

class OpcionesMenu extends React.Component {
    render() {
        return (
            <div>
                <div className="Container3">
                    <Header />
                    <div className="grid">
                        <div className="zonaImagen"> <img src={combo} alt='combo' /></div>
                        <div className="zonaClase"> <div className="bot"> Tipo </div> <div className="bot"> Adiciones </div> <div className="bot"> Salsas </div> </div>
                        <div className="zonaBotones"> <BotonesOpciones/></div>
                    </div>

                </div>
            </div>
        )
    }
};

export default OpcionesMenu;