import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { P } from "./Styling";
import "./Navbar.scss";
import { AppContext } from "../AppContext";

const menuItems = [
  {
    name: "Nueva Orden",
    path: "/nueva-orden",
    user: "mesero",
  },
  {
    name: "Ordenes Enviadas",
    path: "/ordenes-enviadas",
    user: "mesero",
  },
  {
    name: "Pedidos",
    path: "/pedidos",
    user: "chef",
  },
  {
    name: "Pedidos Terminados",
    path: "/pedidos-terminados",
    user: "chef",
  },
];

export default function Navbar(props) {
  const { employee } = useContext(AppContext);
  console.log(employee);
  return (
    <nav className="navbar">
      <div>
        <Link className="navbar-logo" to="/" />
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className="nav-links" exact>
            <P>Home</P>
          </NavLink>
        </li>
        {menuItems
          .filter((item) => item.user === props.rol)
          .map((item, index) => (
            <li key={index} className="nav-item">
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
        <li className="nav-item name"><P>{employee}</P></li>
      </ul>
    </nav>
  );
}
