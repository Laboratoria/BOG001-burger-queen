import React from 'react';
//import { Link } from 'react-router-dom';
import items from '../items';
import './styles/botonesItems.css'

function BadgesList(props) {
  const list = [];
  const listBebidas = [];
  const listAcompañamientos = [];
  const data = items;
 
  const click = (e) => {
  props.setMostrar(true)
  }

  const agregarFactura = (e) => {
    if(e.type.includes('Principal')){
    let newObjetoHamburgue = {name: e.name, price: e.price, adicion:props.adiciones };
    props.setContador(oldArray => [...oldArray, newObjetoHamburgue]);
    }
    else{
    let newObjeto = {name: e.name, price: e.price};
    props.setContador(oldArray => [...oldArray, newObjeto]);
    }
}


        Object.values(data.data).forEach((e) => {
            if(e.type.includes('Principal')){
            list.push(
             <React.Fragment key={e.id} >
              <div className='botonesPrincipal'>
                <li className='lista'>
                 <img className='imgPrincipal' src={e.img} alt='imagen'/>
                    <button className='botonesClase' onClick={()=>{agregarFactura (e);  click(e) }} > {e.name}   ${e.price} </button>
                </li>
              </div>
            </React.Fragment>
            )
            }
            if(e.type.includes('Bebidas')){
              listBebidas.push( 
                <React.Fragment key={e.id}>
                <div className='botonesBebidas'>
                  <li className='lista'>
                  <img className='imgPrincipal' src={e.img} alt='imagen'/>
                      <button onClick={()=>{agregarFactura (e) }} className="botonesClase" id ={e.name}> {e.name}   ${e.price}</button>
                  </li>
                </div>
                </React.Fragment>)
              }
              if(e.type.includes('Acompañamientos')){
                listAcompañamientos.push(
                  <React.Fragment key={e.id}>
                  <div className='botonesAcompañamientos'>
                    <li className='lista'>
                     <img className='imgPrincipal' src={e.img} alt='imagen'/>
                        <button onClick={()=>{agregarFactura (e) }} className="botonesClase" id ={e.name}>{e.name}   ${e.price}</button>
                    </li>
                  </div>
                  </React.Fragment>)
                }
                    })
                            
       return(
        <div className='prueba'>
          <p>Nuestras Hamburguesas</p>
          <ul className="list-unstyled">
              {list}
          </ul>
            <p>Acompañamientos</p>
            <ul className="list-unstyled">
                {listAcompañamientos}
            </ul>
            <p>Bebidas</p>
            <ul className="list-unstyled">
                {listBebidas}
            </ul>
          </div>
      );
    
  }
  
  export default BadgesList;
  