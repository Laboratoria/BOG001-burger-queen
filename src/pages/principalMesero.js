import React , { useState }from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";
import BadgesList from "../componentes/botonesItems";
import Factura from "../componentes/factura";
import Nombre from "../componentes/nombre";
import db from "../firebaseguardarpedido";
//import BotonesGaseosa from "../componentes/practicaGaseosa.js";

//class PrincipalMesero extends React.Component {
  //render() {

 /*   export const nuevoItem = async () => {

      const subirNuevoItem = document.getElementById('subirNuevoItem');
      subirNuevoItem.addEventListener('submit', (e) => {
          e.preventDefault();
          const nombreNuevoItem = document.getElementById('nombreNuevoItem').value;
          const descripcionNuevoItem = document.getElementById('descripcionNuevoItem').value;
          //sacar funcion aparte main.js guardar obj 
          db.collection('objetos').doc().set(
              {   
                  nombreNuevoItem,
                  descripcionNuevoItem
              }
          )
          console.log( nombreNuevoItem, descripcionNuevoItem )
          window.location.hash = "#/item"
      })
  }
*/

function PrincipalMesero (props) {
    
  const [count, setCount] = useState([]);

    return (
      <React.Fragment>
        <div className="Container1">
          <Header />
          <div className="card-body">
            <Nombre />
            <div className="grid">
              <BadgesList contador={count} setContedor={setCount} />
              <Factura acaVacontador={count}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  //}
}

export default PrincipalMesero;
