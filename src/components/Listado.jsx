import React, { Fragment, useState } from 'react';


const Listado = () => {
  // States area
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6]);

  //Functions area

  //Rendering area
  return (
    <Fragment>
      <ul>
        {
          numeros.map((item, index) =>
          <li key={index}>
            {index} ... {item}
          </li>)
      }
      </ul>
    </Fragment>
  );
}

export default Listado;