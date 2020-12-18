import React, {useState , useEffect} from "react";
import "./styles/pedidosCocina.css";
import firebase from "../firebase";
import { listenAllDocs } from "../firebaseCrud"; 
/*

function TableReclamo() {
    const [rowData, setRowData] = useState([]);
  
    useEffect(() => {
      listenAllDocs(setRowData);
    }, []);
  
    const headerColumn = [
      {
        id: "01",
        label: "pedido",
      }]
    }
const db = firebase.firestore();
const obtenerPedidos = async () => {
    return db.collection('Pedidos')
    .get()
}

function BotonesPedidos  (props) {

    const querySnapshot = async() => obtenerPedidos();

  let view = '';
  querySnapshot.forEach ( doc => { 
        const infoPedido = doc.data()
        infoPedido.id = doc.id; 
        view += <div className="botonPedido" type="button" id ={infoPedido.id}>
        <div className="numero pedido">
            <p>{infoPedido.nombreCliente}</p>
            <p>{infoPedido.orden} </p>
        </div>
    </div>
    
    })

        return ( 
            view  
        )
}

export default BotonesPedidos;

*/