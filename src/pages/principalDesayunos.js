import React, { useState }from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";
import FacturaDesayuno from "../componentes/facturaDesayuno";
import Nombre from "../componentes/nombre";
import BadgesListDesayuno from "../componentes/botonesDesayuno";
import Check from '../componentes/check'
function PrincipalDesayuno(props){
  const [itemsMenu, setItemsMenu] = useState([]);
  console.log(itemsMenu);
   return (
      <div>
        <div className="Container4">
          <Header />
          <div className="card-body">
            <Nombre />
            <div className="grid" >
                <BadgesListDesayuno  contador={itemsMenu} setContador={setItemsMenu}/>
              <FacturaDesayuno  acaVacontador={itemsMenu} setItemsMenu={setItemsMenu}/>
            </div>
            <Check />
          </div>
        </div>
      </div>
    );
}

export default PrincipalDesayuno;
