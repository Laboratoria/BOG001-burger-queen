import React, { useState } from 'react';
import ShowName from './ShowName';

const AskName = () => {
  const [name, setName] = useState('');

  const Validate = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <p>¡Hola! ¿Cómo te llamas?</p>
      <form onSubmit={Validate}>
        <input className="inputName" type="text" placeholder="Ingresa tu nombre" onChange={(event) => { setName(event.target.value) }} />
      </form>
      <ShowName show={name}/>
    </div>
  )
}
export default AskName