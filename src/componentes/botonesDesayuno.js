import React from 'react';
import items from '../items';
import './styles/botonesItems.css'
class BadgesListDesayuno extends React.Component {
  render() {
        const list = [];
        const listBebidas = [];
        const data = items

        Object.values(data.data).forEach((e) => {
            if(e.type.includes('Desayuno')){
            list.push(
              <React.Fragment  key={e.id}>
              <div className='botonesPrincipal'>
                <li className='lista'>
                 <img className='imgPrincipal' src={e.img} alt='imagen'/>
                    <button className='botonesClase'>{e.name}   ${e.price}</button>
                </li>
              </div>
              </React.Fragment>)
            }
            if(e.type.includes('DesayunoBebidas')){
              listBebidas.push(
                <React.Fragment  key={e.id}>
                <div className='botonesBebidas'>
                  <li className='lista' key={e.id}>
                   <img className='imgPrincipal' src={e.img} alt='imagen'/>
                      <button className='botonesClase'>{e.name}   ${e.price}</button>
                  </li>
                </div>
                </React.Fragment>)
              }
                    })
                    
     return (
        <div>
          <p>Menú</p>
          <ul className="list-unstyled" key={data.key}>
              {list}
          </ul>
            <p>Bebidas</p>
            <ul className="list-unstyled" key={data.key}>
                {listBebidas}
            </ul>
          </div>
      );
    }
  }
  
  export default BadgesListDesayuno;
  