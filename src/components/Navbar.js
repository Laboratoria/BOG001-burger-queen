import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { P } from './Styling';
import './Navbar.scss';
import { AppContext } from '../AppContext';
import Logo from '../assets/Logo.png';

const menuItems = [
  {
    name: 'Nueva Orden',
    path: '/nueva-orden',
    user: 'mesero',
  },
  {
    name: 'Ordenes Enviadas',
    path: '/ordenes-enviadas',
    user: 'mesero',
  },
  {
    name: 'Pedidos',
    path: '/pedidos',
    user: 'chef',
  },
  {
    name: 'Pedidos Terminados',
    path: '/pedidos-terminados',
    user: 'chef',
  },
];

export default function Navbar(props) {
  const { employee } = useContext(AppContext);
  return (
    <nav className="navbar">
      <div>
        <Link to="/"><img src={Logo} alt="" className="navbar-logo" /></Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className="nav-links" exact>
              <P>Home</P>
            </NavLink>
          </li>
          {menuItems
            .filter((item) => item.user === props.rol)
            .map((item, i) => (
              <li key={`menu${i}`} className="nav-item">
                <NavLink
                  to={item.path}
                  className="nav-links"
                  exact
                  activeClassName="active"
                >
                  <P>{item.name}</P>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
      <div><P employee>{employee}</P></div>
    </nav>
  );
}
