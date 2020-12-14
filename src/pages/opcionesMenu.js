import React, { useState } from "react";
import "../style/opcionesMenu.css";
import combo from "../images/combo.png";
import BotonesOpciones from "../componentes/botonesOpciones";
import Header from "../componentes/header"
/*
Hacer un condicional que muestre al ser verdadero los botones de opciones. (renderizado condicional del componente opciones menu) 
exportar componente opciones menu 
llamar dinamicamente /// como hacer un renderizado dinamico 


*/
function OpcionesMenu( props ) {

const [inicio, setInicio] = useState(["Tipo" , "Adición" , "Salsas"]);

let mostrarOpciones;

//function filtrar(string, array) { return array.filter( item => item.type === string ) }

//const arrayOpciones= ["salsas" , "adiciones" , "tipo"];



return (
    <div>
      <Header />
    <div className="Container3">
        <div className="grid">
        <div className="zonaImagen">
            {" "}
            <img src={combo} alt="combo" />
        </div>
          <div className="zonaClase">
            {" "}
            <div
              className="bot"
              type="button"
              onClick={() => {  mostrarOpciones = 
               "Tipo";
                setInicio(mostrarOpciones)
              }}
            >
              {" "}
              Tipo{" "}
            </div>
            <div
              className="bot"
              type="button"
              onClick={() => { mostrarOpciones = 
                "Adición";
                setInicio(mostrarOpciones)
              }}
            >
              {" "}
              Adiciones{" "}
            </div>
            <div
              className="bot"
              type="button"
              onClick={() => {  mostrarOpciones = 
                "Salsas";
                setInicio(mostrarOpciones)
              }}
            
            >
              {" "}
              Salsas{" "}
            </div>{" "}
          </div>
          <div className="zonaBotones">
            {" "}
            <BotonesOpciones tipoFiltro ={inicio} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpcionesMenu;
