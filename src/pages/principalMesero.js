import React , { useState }from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";
import BadgesList from "../componentes/botonesItems";
import Factura from "../componentes/factura";
import Nombre from "../componentes/nombre";
import Check from "../componentes/check";
//import guardarPedidosfs from "../firebaseguardarpedido";
//import BotonesGaseosa from "../componentes/practicaGaseosa.js";



 /*   const nuevoPedido = async () => {
      const subirNuevoPedido = document.getElementById('subirPedido');
      subirPedido.addEventListener('submit', (e) => {
          e.preventDefault();
          const nombreCliente = document.getElementById('nombreCliente').value;
          const pedido = itemsMenu
          //como tomar todo del mismo lugar ? id nombre 
          guardarPedidosfs(nombreCliente , pedido )
          console.log( nombre, Pedido )
      })
  }
*/

function PrincipalMesero (props) {
  const [itemsMenu, setItemsMenu] = useState([]);
    return (
      <React.Fragment>
        <div className="Container1">
          <Header />
          <div className="card-body">
            <Nombre />
            <div className="grid">
              <BadgesList contador={itemsMenu} setContador={setItemsMenu} />
              <Factura acaVacontador={itemsMenu} setItemsMenu={setItemsMenu}/>
            </div>
            <Check/>
          </div>
        </div>
      </React.Fragment>
    );

}

export default PrincipalMesero;
