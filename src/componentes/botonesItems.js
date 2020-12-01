import React from 'react';
import { Link } from 'react-router-dom';
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
             <React.Fragment key={e.id}>
              <div className='botonesPrincipal'>
                <li className='lista'>
                 <img className='imgPrincipal' src={e.img} alt='imagen'/>
                    <Link className='botonesHamburguesa' to='/opciones'>{e.name}   ${e.price}</Link>
                </li>
              </div>
            </React.Fragment>)
            }
            if(e.type.includes('Bebidas')){
              listBebidas.push(
                <React.Fragment key={e.id}>
                <div className='botonesBebidas'>
                  <li className='lista'>
                   <img className='imgPrincipal' src={e.img} alt='imagen'/>
                      <button className='botonesClase'>{e.name}   ${e.price}</button>
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
                        <button className='botonesClase' >{e.name}   ${e.price}</button>
                    </li>
                  </div>
                  </React.Fragment>)
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
  