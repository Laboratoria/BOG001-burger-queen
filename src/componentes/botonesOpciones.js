import React from "react";
import "./styles/botonesOpciones.css";
import items from '../items.json';
import salsa from '../images/salse.jpg';
import adiciones from '../images/adicion.jpg';
import hamburguesa from '../images/hamburguesa.jpg'

/*
function BotonesOpciones (props){


    const facturaAdiciones = (element) => {
        let newObjeto = {name: element.name, price: element.price};
        props.envio(oldArray => [...oldArray, newObjeto])
        console.log(newObjeto);
    }


    const data = items;
    const listSalsa = [];
    const listTipo = [];
    const adicion = [];
    
    
    function filtrar (string, array) { return array.filter( item => item.type === string ) }
        let arrayEnviar = filtrar(props.tipoFiltro , data)
        
        
        arrayEnviar.forEach((element) => {
          if(element.type.includes('Salsas')){
           listSalsa.push(
               <React.Fragment key={element.id}>
              <li className="listFact" key={element.id}>
                  <div className='botones' type="button" value= {element.type} onClick={()=> {facturaAdiciones(element)} }>
                          <img className='imgAdicion' src={salsa} alt='imagen' />
                          <div><center>{element.name}</center></div>
                  </div>  
              </li>
               </React.Fragment>
           )
                }
                if(element.type.includes('Adición')){
                    listSalsa.push(
                        <React.Fragment key={element.id}>
                       <li className="listFact">
                           <div className='botones' type="button" value= {element.type} onClick={()=> {facturaAdiciones(element)} }>
                                   <img className='imgAdicion' src={adiciones} alt='imagen' />
                                   <div><center>{element.name}</center></div>
                           </div>  
                       </li>
                        </React.Fragment>
                    )
                         }
                         if(element.type.includes('Tipo')){
                            listSalsa.push(
                                <React.Fragment key={element.id}>
                               <li className="listFact">
                                   <div className='botones' type="button" value= {element.type} onClick={()=> {facturaAdiciones(element)} }>
                                           <img className='imgAdicion' src={hamburguesa} alt='imagen' />
                                           <div><center>{element.name}</center></div>
                                   </div>  
                               </li>
                                </React.Fragment>
                            )
                                 }
            });
            return (
                <div className='botonesOpciones'>
                <ul className='intentoList'>
                    {listSalsa}
               </ul>
                  <ul className='intentoList'>
                  {listTipo}
             </ul>
                <ul className='intentoList'>
                {adicion}
           </ul>
           </div>
          )
  //  }
}*/
    export default BotonesOpciones;