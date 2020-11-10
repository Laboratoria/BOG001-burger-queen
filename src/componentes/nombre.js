import React from "react";

import "./styles/nombre.css";

class Nombre extends React.Component {
  render() {
    return (
      <div className="form-control">
        <p className="nombre">
          Nombre:<input className="inputNombre" type="text"></input>
        </p>
      </div>
    );
  }
}

export default Nombre;
