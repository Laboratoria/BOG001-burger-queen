import React, { useState } from "react";
import "../style/opcionesMenu.css";
import combo from "../images/combo.png";
import BotonesOpciones from "../componentes/botonesOpciones";
import Header from "../componentes/header"

function OpcionesMenu( props ) {

const [inicio, setInicio] = useState(["Tipo" , "Adición" , "Salsas"]);


let mostrarOpciones;

  
const click = (e) => {
  props.setMostrar(false)

  }


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
            <BotonesOpciones tipoFiltro ={inicio} envio={props.setContadorAdiciones} intento={props.adiciones}/>
          </div>
        </div>
        <button className='botonVolver' onClick={()=>{click()} }>Regresar</button>
      </div>
    </div>
  );
}

export default OpcionesMenu;
