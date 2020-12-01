import React , { useState }from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";
import BadgesList from "../componentes/botonesItems";
import Factura from "../componentes/factura";
import Nombre from "../componentes/nombre";
import BotonesGaseosa from "../componentes/practicaGaseosa.js";

//class PrincipalMesero extends React.Component {
  //render() {
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

              <BotonesGaseosa contador={count} setContedor={setCount}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  //}
}

export default PrincipalMesero;
