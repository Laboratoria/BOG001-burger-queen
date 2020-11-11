import React from "react";
import { Link } from 'react-router-dom';

import logo from "../images/hamburguesa.svg";
import "./styles/header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Burger</span>
            <span className="font-weight-bold">Queen</span>
          </a>
          <Link className="Navbar-p" to="/desayunos">Desayunos</Link>
          <Link className="Navbar-p" to="/meseros">Principal</Link>
        </div>
      </div>
    );
  }
}

export default Header;
