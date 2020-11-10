import React from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";
import Factura from "../componentes/factura";
import Nombre from "../componentes/nombre";
import BadgesListDesayuno from "../componentes/botonesDesayuno";

class PrincipalDesayuno extends React.Component {
  render() {
    return (
      <div>
        <div className="Container">
          <Header />
          <div className="card-body">
            <Nombre />
            <div className="grid">
                <BadgesListDesayuno />
              <Factura />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalDesayuno;
