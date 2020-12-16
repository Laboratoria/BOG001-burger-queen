import React, { useState } from "react";
import Header from "../componentes/header";
import "../style/opcionesMenu.css";
import combo from "../images/combo.png";
import BotonesOpciones from "../componentes/botonesOpciones";

/*
Hacer un condicional que muestre al ser verdadero los botones de opciones. (renderizado condicional del componente opciones menu) 
exportar componente opciones menu 
llamar dinamicamente /// como hacer un renderizado dinamico 


*/
function OpcionesMenu( props ) {

const [inicio, setInicio] = useState(["Tipo" ]);

let mostrarOpciones;

//contador={itemsMenu} setContador={setItemsMenu}
const click = (e) => {
  props.setMostrar(false)

  }


return (
    <div>
    <div className="Container3">
        <Header />
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
