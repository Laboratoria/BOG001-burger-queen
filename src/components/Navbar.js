import React from 'react';
import { Link  } from 'react-router-dom';
import {P, H2, H3} from './Styling'
import './Navbar.scss';

const menuItems = [
  {
    name: 'Nueva Orden',
    path: '/nueva-orden',
    user:'mesero'
},
{
  name: 'Ordenes Enviadas',
    path: '/ordenes-enviadas',
    user:'mesero'
},
{
    name: 'Pedidos',
    path: '/pedidos',
    user:'chef'
}
]

export default function Navbar() {

  return (
   <nav className='navbar'>
     <div>
       <Link className ='navbar-logo' to='/'></Link>
     </div>
     <ul className ='nav-menu'>
       <li className='nav-item'>
         <Link to='/' className='nav-links' >
           <P>Home</P>
         </Link>
       </li>
        {menuItems.map((item, index)=> {
           if(item.user === 'mesero'){
             return (
            <li  key={index} className='nav-item'>
            <Link to={item.path} className='nav-links'>
              <P>{item.name}</P>
            </Link>
          </li>
             )
           }
        }
        )}
     </ul>
   </nav>
  )
}


