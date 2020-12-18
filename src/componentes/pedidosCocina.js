import React, {useState , useEffect} from "react";
import "./styles/pedidosCocina.css";
//import getAllDocuments from"../firebaseguardarpedido"
import firebase from "../firebase";

const db = firebase.firestore();

const getAllDocuments = async () => {
    let view
    await db
      .collection("pedidos")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => { 
            const infoPedido = doc.data()
            infoPedido.id = doc.id; 
            view += <div className="botonPedido" type="button" id ={infoPedido.id}>
            <div className="numero pedido">
                <p>{infoPedido.nombreCliente}</p>
                <p>{infoPedido.orden} </p>
            </div>
        </div>
        }); // doc.data() is never undefined for query doc snapshots);
      });
      return view
  };
  
  const BotonesPedidos = () => {
    const [loading, setLoading] = useState(false);
    const [postsList, setPostsList] = useState([]);
    
    
  
    useEffect(() => {
      setLoading(true);
      getAllDocuments().then(
        console.log)
        
    /*    (view) => setPostsList(view));
      setLoading(false);
    }, [loading]);
    return <div>{[ postsList, setPostsList, loading, setLoading ] }</div>;*/
  });
  }

  /* 
function BotonesPedidos  (props) {

   

  
getAllDocuments()
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
*/

export default BotonesPedidos;