import React from "react";
import burger from '../../assets/img/LogoBurgerlab.png';
import portada from '../../assets/img/Fondo.png';
import './Home.scss';

const Home = () => {
  return (
    <div className="Home">
        <img src={burger} className="Burger-logo" alt="logo" />
        <img src={portada} className="Portada" alt="portada" />
        <p className= "Slogan">Armala - Comela - Disfrutala</p>
        <p className= "Rol">¿Cual es tu rol?</p>
        <div className="Button-rol">
        <button>Mesero</button> <button>Chef</button>
        </div>
    </div>
    /*<footer className="footer">
    <p> &copy; Todos los derechos reservados - |A.C.D|  -  BURGERLab   </p>
    </footer>*/
  );
};

export default Home;
