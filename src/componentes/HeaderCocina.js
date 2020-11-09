import React from "react";
//import { Link } from 'react-router-dom';
import logo from "../images/hamburguesa.svg";
import "./styles/header.css";

class HeaderCocina extends React.Component {
  render() {
    return (
      <div className="Navbar-c">
        <div className="container-fluid">
          <a className="Navbar__brand" href="/">
            <img className="Navbar__brand-logo" src={logo} alt="Logo" />
            <span className="font-weight-light">Burger</span>
            <span className="font-weight-bold">Queen</span>
          </a>
          <a className="Navbar-p" href="/">cocina</a>
        </div>
      </div>
    );
  }
}

export default HeaderCocina;