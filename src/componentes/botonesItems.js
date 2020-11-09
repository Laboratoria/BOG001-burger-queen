import React from 'react';
import items from '../items';
import './styles/botonesItems.css'
class BadgesList extends React.Component {
    render() {
        const list = [];
        const listBebidas = [];
        const listAcompañamientos = [];
        const data = items

        Object.values(data.data).forEach((e) => {
            if(e.type.includes('Principal')){
            list.push(
              <div className='botonesPrincipal'>
                <li className='lista' key={'pri'+ e.id}>
                 <img className='imgPrincipal' src={e.img} alt='imagen'/>
                    <button className='botonesClase'>{e.name}   ${e.price}</button>
                </li>
              </div>)
            }
            if(e.type.includes('Bebidas')){
              listBebidas.push(
                <div className='botonesBebidas'>
                  <li className='lista' key={'beb' + e.id}>
                   <img className='imgPrincipal' src={e.img} alt='imagen'/>
                      <button className='botonesClase'>{e.name}   ${e.price}</button>
                  </li>
                </div>)
              }
              if(e.type.includes('Acompañamientos')){
                listAcompañamientos.push(
                  <div className='botonesAcompañamientos'>
                    <li className='lista' key={'Acom' + e.id}>
                     <img className='imgPrincipal' src={e.img} alt='imagen'/>
                        <button className='botonesClase'>{e.name}   ${e.price}</button>
                    </li>
                  </div>)
                }
                    })
                    
     return (
        <div>
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
  }
  
  export default BadgesList;
  