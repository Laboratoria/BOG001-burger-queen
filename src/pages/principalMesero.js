import React from "react";
import Header from "../componentes/header";
import "../style/principalMesero.css";
import BadgesList from "../componentes/botonesItems";

class PrincipalMesero extends React.Component {
  render() {
    return (
      <div>
        <div className="Container">
          <Header />
          <div className="card-body">
          <div className='form-control'>
            <p>Nombre</p>
          <input className="" type='text'></input>
          </div>
          <div className="grid">
               <BadgesList />
                <div className="parteDos">  </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PrincipalMesero;
