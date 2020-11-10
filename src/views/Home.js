import React from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logo.png';

const Home = () => {
  return (
    <div className="Home">
      <div className="Logo">
          <img src={logo} alt="logo"/></div>
          <div className="Soy"><h1>Soy</h1></div>

     <div className='Buttons'>
            <button className="Button">
              
            <Link to={'/mesero'}><h2>Mesero</h2></Link>
            </button>
            <button className="Button">
            <Link to={'/cocinero'}><h2>Cocinero</h2></Link>
            </button>
           
            </div>


      </div>  



  );
}


export default Home;