import React from "react";

import "./styles/nombre.css";
/*const objeto = {nombreCliente: "Lore", pedido:[{nombreItem:"papas", precio:5},{nombre: "Agua", precio: 5 }] }*/
class Nombre extends React.Component {
 
    addDish = event => {
      event.preventDefault();
      console.log(this.newName.current.value);
    }
    
  
    newName = React.createRef(); 
  render() {
    return (
      <form className="form-control" onSubmit={this.addDish}>
        <p className="nombre">
          Nombre:<input className="inputNombre" ref={this.newName}></input>       
        </p>
      </form>
    );
  }
}

export default Nombre;
