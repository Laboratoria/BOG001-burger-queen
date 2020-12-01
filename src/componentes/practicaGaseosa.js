import React from "react";
import "./styles/botonesItems.css";

function BotonesGaseosa(props) {
    let newElement = "Item ";
    //const [count, setCount] = useState([]);
    //class BotonesGaseosa extends React.Component {
    const agregarFactura = (e) => {
        console.log("Estoy haciendo click")
        props.setContedor(oldArray => [...oldArray, newElement]);
    }

    //   render() {

    return (
        //<div className="botonesClase" >
            <button onClick={agregarFactura} className="botonesClase" >
                <p> Coca Cola </p>
            </button>
        //</div>
    )
    //}
}

export default BotonesGaseosa;