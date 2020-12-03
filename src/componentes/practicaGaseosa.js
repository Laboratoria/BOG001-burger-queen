import React from "react";
import "./styles/botonesItems.css";
import items from '../items';

function BotonesGaseosa(props) {
    const data = items

    //let newElement = nombre;
    //const [count, setCount] = useState([]);
    const agregarFactura = (e) => {
        console.log(nombre)
        props.setContedor(oldArray => [...oldArray, nombre]);
    }
    
    let nombre="";
    Object.values(data.data).forEach((e) => {
        nombre = e.name}
        )

    
    //    items.map( (cu) => console.log(cu.name ) )

    return (
        
            <button onClick={agregarFactura} className="botonesClase">
                <p> {nombre} </p>
            </button>
        
    )

}

export default BotonesGaseosa;