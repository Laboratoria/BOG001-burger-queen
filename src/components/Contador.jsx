import React, { Fragment, useState } from 'react';


const Contador = () => {
  // States area
  const [numero, setNumero] = useState(0);
  
  //Functions area
  const Aumentar = () => {
    setNumero(numero + 1)
  }

  const Reducir = () => {
    setNumero(numero - 1)
  }

  //Rendering area
  return (
    <Fragment>
      <h2>
        <button onClick={Aumentar}>Aumentar</button>
        <button onClick={Reducir}>Reducir</button>
        Cantidad del contador: {numero}
      </h2>
    </Fragment>
  );
}

export default Contador;