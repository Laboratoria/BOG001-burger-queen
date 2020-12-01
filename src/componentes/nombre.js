import React from "react";

import "./styles/nombre.css";

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
          <button type="submit" onClick={this.addDish}>enviar</button>        
        </p>
      </form>
    );
  }
}

export default Nombre;
