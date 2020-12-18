import React, { useState }from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";
import FacturaDesayuno from "../componentes/facturaDesayuno";
import Nombre from "../componentes/nombre";
import BadgesListDesayuno from "../componentes/botonesDesayuno";
import Check from '../componentes/check'
function PrincipalDesayuno(props){
  const [itemsMenu, setItemsMenu] = useState([]);
  const [nombre, setNombre] = useState({ nombre: "" }); 
  console.log(itemsMenu);


  

  

  return (
      <div>
        <div className="Container4">
          <Header />
          <div className="card-body">
            <Nombre name={nombre} setName={setNombre} />
            <div className="grid" >
                <BadgesListDesayuno  contador={itemsMenu} setContador={setItemsMenu}/>
              <FacturaDesayuno  acaVacontador={itemsMenu} setItemsMenu={setItemsMenu}/>
            </div>
            <Check name={nombre} setName={setNombre} pedidoF={itemsMenu} setItemsMenu={setItemsMenu} />
          </div>
        </div>
      </div>
    );
}

export default PrincipalDesayuno;
