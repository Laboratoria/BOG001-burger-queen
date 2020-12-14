import React from "react";

import "./styles/nombre.css";
/*const objeto = {nombreCliente: "Lore", pedido:[{nombreItem:"papas", precio:5},{nombre: "Agua", precio: 5 }] }*/
function Nombre (props) {
      return (
      <form className="form-control">
        <p className="nombre">
          Nombre:<input className="inputNombre"></input>
        </p>
      </form>
    );
}

export default Nombre;
