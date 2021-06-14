import React, {useState} from 'react';
import ShowName from './ShowName';

const AskName = () => {
    const [name, setName] = useState('');

    const Validate = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>¡Hola! ¿Cómo te llamas?</h1>
            <form onSubmit={Validate}>
            <input className="inputName" type="text" placeholder="Ingresa tu nombre" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="submit"/>
            </form>
            <ShowName name={name} />
        </div>
    )
}

export default AskName
