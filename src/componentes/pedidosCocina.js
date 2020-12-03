import React from "react";
import "./styles/pedidosCocina.css";
import firebase from "../firebase";

const db = firebase.firestore();
const obtenerPedidos = async () => {
    return db.collection('pedidos')
    .get()
}


function BotonesPedidos  (props) {

    const querySnapshot = await obtenerPedidos();

  let view = '';
  querySnapshot.forEach ( doc => { 
        const infoPedido = doc.data()
        infoPedido.id = doc.id; 
        view += <div className="botonPedido" type="button" id ={infoPedido.id}>
        <div className="numero pedido">
            <p>{infoPedido.nombre}</p>
            <p>{infoPedido.orden} </p>
        </div>
    </div>
    
    })

        return ( 
            view  
        )
}

export default BotonesPedidos;