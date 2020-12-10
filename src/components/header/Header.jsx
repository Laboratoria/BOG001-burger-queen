import React from "react";
import "./Header.scss";
import { render } from "@testing-library/react";
import logoNav from "../../assets/img/imagenHeader.png";
import textBurger from "../../assets/img/BURGERlogo.png";
import textLab from "../../assets/img/lablogo.png";
import heart from "../../assets/img/heart.png";
import user from "../../assets/img/usuario.png";

const Header = () => {
  render();
  return (
    <nav className="containerNav">
      <div className="containerLogo">
        <img src={logoNav} className="logoNav" alt="logoburger" />
        <img src={textBurger} className="textBurger" alt="logoburger" />
        <img src={textLab} className="textLab" alt="logoburger" />
        <img src={heart} className="heart" alt="logolab" />
      </div>

      <div className="containerLoginUser">
        <h4>Hola,</h4>
        <p className="nameLogin"></p>
        <img src={user} className="user" alt="logouser" />
      </div>
    </nav>
  );
};

export default Header;
