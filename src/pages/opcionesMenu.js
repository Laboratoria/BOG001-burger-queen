import React from "react";
import Header from "../componentes/header";
import '../style/opcionesMenu.css';
import combo from "../images/combo.png";
import BotonesOpciones from "../componentes/botonesOpciones"

/*
Hacer un condicional que muestre al ser verdadero los botones de opciones. (renderizado condicional del componente opciones menu) 
exportar componente opciones menu 
llamar dinamicamente /// como hacer un renderizado dinamico 


*/
function OpcionesMenu (props){
    
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

export default OpcionesMenu;