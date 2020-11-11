import React from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";
import BadgesList from "../componentes/botonesItems";
import Factura from "../componentes/factura";
import Nombre from "../componentes/nombre";

class PrincipalMesero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Container1">
          <Header />
          <div className="card-body">
            <Nombre />
            <div className="grid">
              <BadgesList />
              <Factura />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PrincipalMesero;
