import React from "react";
import "./styles/botonesOpciones.css";
import items from '../items.json';
import salsa from '../images/salse.jpg';
import adiciones from '../images/adicion.jpg';
import hamburguesa from '../images/hamburguesa.jpg'


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
}

/*
function BotonesOpciones (props){
    const data = items

    const facturaAdiciones = (element) => {
        let newObjeto = {name: element.name, price: element.price};
        props.envio(oldArray => [...oldArray, newObjeto])
        console.log(newObjeto);
    }
        
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
                    <button className='botones' type="button" value= {item.type} onClick={()=>{ agregarFactura (item) ; facturaAdiciones(item) }}>
                            <img className='imgPrincipal' src={item.img} alt='imagen' />
                            <div><center>{item.name}</center></div>
                    </button>  
                </li>))} </ul>
            )
        
  //  }
}*/
    export default BotonesOpciones;