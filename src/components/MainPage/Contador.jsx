import React, { useState } from 'react';


const Contador = () => {
    // Declara una nueva variable de estado, que llamaremos "count".
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
    </button>
        </div>
    );
}

const arrayUno = ['Chile', 'Argentina']
const arrayDos = ['Perú', 'Mexico']

const Unidos = [...arrayUno, ...arrayDos]
console.log(Unidos)


export default Contador;