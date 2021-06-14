import React, {useState} from 'react'

const AskName = () => {
    const [name, setName] = useState('');

    const Validate = (event) => {
        event.preventDefault();
        return(<h1>Hola {name}</h1>);
    }

    return (
        <div>
            <h1>¡Hola! ¿Cómo te llamas?</h1>
            <form onSubmit={Validate}>
            <input className="inputName" type="text" placeholder="Ingresa tu nombre" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="submit"/>
            </form>
        </div>
    )
}

export default AskName
