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


          
            const agregarFactura = (e) => {
              let newObjeto = {name: e.name, price: e.price};
              props.setContador(oldArray => [...oldArray, newObjeto]);
          }

            return (
//                <div>{list}</div>
                 // hacer el html

                <ul>
                { arrayEnviar.map((item, index) => (
                    
                <li className="listFactr" key={index}>
                    <button className='botones' type="button" value= {item.type} onClick={()=>{agregarFactura (item) }}>
                            <img className='imgPrincipal' src={item.img} alt='imagen' />
                            <div><center>{item.name}</center></div>
                    </button>  
                </li>))} </ul>
            )
        
  //  }
}
    export default BotonesOpciones;