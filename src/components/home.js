import React from "react";
import burger from '../img/LogoBurgerlab.png';
import portada from '../img/Fondo.png';
import '../components/Home.scss';

const Home = () => {
  return (
    <div className="Home">
        <img src={burger} className="Burger-logo" alt="logo" />
        <img src={portada} className="Portada" alt="portada" /> 
    </div>
  );
};

export default Home;
