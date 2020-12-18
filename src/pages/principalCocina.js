import React, {useState} from "react";
import HeaderCocina from "../componentes/HeaderCocina";
 import BotonesPedidos from "../componentes/pedidosCocina";
import '../style/principalCocina.css';
import Check from '../componentes/check'

function  PrincipalCocina (props)  {
    const { data, setData} = useState();
    //const [loading, setLoading] = useState(false);
    //const [postsList, setPostsList] = useState([]);
   

        return (
            <div>
                <div className= "Container2"> 
                <HeaderCocina/>
                <div className="grid"> 
                <div className="parteUno"> <BotonesPedidos data = {data} setData = {setData} />   </div>
                <div className="parteDos"> <div className="factura"> <div className="title">RESUMEN PEDIDO:</div><div className="resumenFactura">  LALALA </div></div> </div>
                <Check/>
                </div>
                
                </div>
            </div>
        )
    }


export default PrincipalCocina