import React from "react";
import "./styles/botonesOpciones.css";
import items from '../items.json';



function BotonesOpciones (props){
    const data = items
        
    function filtrar (string, array) { return array.filter( item => item.type === string ) }
        
        console.log(props.tipoFiltro)
        console.log(data)
        let arrayEnviar = filtrar(props.tipoFiltro , data)

        console.log(arrayEnviar)

            return (
//                <div>{list}</div>
                 // hacer el html

                <ul>
                { arrayEnviar.map((item, index) => (
                    
                <li className="listFactr" key={index}>
                    <div className='botones' type="button" value= {item.type}>
                            <img className='imgPrincipal' src={item.img} alt='imagen' />
                            <div><center>{item.name}</center></div>
                    </div>  
                </li>))} </ul>
            )
        
  //  }
}
    export default BotonesOpciones;