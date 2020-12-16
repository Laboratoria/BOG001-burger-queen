import React from "react";

import "./styles/nombre.css";
/*const objeto = {nombreCliente: "Lore", pedido:[{nombreItem:"papas", precio:5},{nombre: "Agua", precio: 5 }] }*/
function Nombre (props) {
  const handleInputChange = (event) => {;
    props.setName({
      ...props.nombre,
      [event.target.name]: event.target.value
    });
  };
      return (
      <form className="form-control">
        <p className="nombre">
          Nombre:<input className="inputNombre"  onChange={handleInputChange}
        name="nombre"></input>
        </p>
      </form>
    );
}

export default Nombre;
