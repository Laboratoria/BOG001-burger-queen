import React, {useState , useEffect} from "react";
import "./styles/pedidosCocina.css";
import firebase from "../firebase";

const db = firebase.firestore();

const getAllDocuments = (callback) => {
   // let view
  //  await 
    db
      .collection("pedidos")
      .get()
      .then((querySnapshot) => {
       // .onSnapshot((doc) => {
          const dataArr = querySnapshot.docs.map((order) => ({
            id: order.id,
            ...order.data(),
          }));
          callback(dataArr)
        });
      };
      

  
 function    BotonesPedidos (props)  {

    const [data, setData] = useState([]);
    
    useEffect(() => {
      getAllDocuments(setData)
    }, []);
     // .then(()=>{
  
      return (  <div> {data.map((infoPedido) => (
        <div key={infoPedido.id} className="content-pedido">
        <div className="botonPedido" type="button" id ={infoPedido.id}>
        <div className="numero pedido">
          <p>{infoPedido.nombreCliente}</p>
          <p>{infoPedido.orden} </p>
      </div>
  </div>
  </div>))}
  </div> 
            
            )}

     //)})}


export default BotonesPedidos;