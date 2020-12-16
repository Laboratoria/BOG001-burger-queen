import React , { useState}from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";
import BadgesList from "../componentes/botonesItems";
import Factura from "../componentes/factura";
import Nombre from "../componentes/nombre";
import Check from "../componentes/check";
import OpcionesMenu from "./opcionesMenu";
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

  const [itemsMenu, setItemsMenu] = useState([])
  const [itemsAdiciones, setItemsAdiciones] = useState([]);
  const [mostrar, setMostrar] = useState(false)  
  const [nombre, setNombre] = useState({ nombre: "" }); 

 
  
  if (mostrar) {
    return  (
        <OpcionesMenu adiciones={itemsAdiciones} setContadorAdiciones={setItemsAdiciones} setMostrar={setMostrar}/> 
        
     )
    
     }else
    return (
      <React.Fragment>
        <div className= 'Container1'>
          <Header/>
          <div className='card-body'>
            <Nombre name={nombre} setName={setNombre}/>
            <div className= 'grid'>
              <BadgesList contador={itemsMenu} setContador={setItemsMenu} setMostrar={setMostrar} setItemsMenu={setItemsMenu} adiciones={itemsAdiciones} setContadorAdiciones={setItemsAdiciones} />
              <Factura acaVacontador={itemsMenu} setItemsMenu={setItemsMenu} adiciones={itemsAdiciones} setContadorAdiciones={setItemsAdiciones} />
            </div>
            <Check name={nombre} setName={setNombre} pedidoF={itemsMenu} setItemsMenu={setItemsMenu} adiciones={itemsAdiciones} setContadorAdiciones={setItemsAdiciones} />
          </div>
        </div>
      </React.Fragment>
    );

}

export default PrincipalMesero;
