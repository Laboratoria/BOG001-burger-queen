import React from "react";
import { Link } from 'react-router-dom'
import '../style/home.css'
import logo from "../images/hamburguesa.svg";

function Home() {
    return (
      <div>
        <div className="Container0">
          <div className="card-body1">
          <img className="logo" src={logo} alt="Logo" />
            <div className="grid1">
            <span className="font">BurgerQueen</span>
            <p className="nombre">
          Ingresar:<input className="input" type="text"></input>
           </p>
           <Link className='botonEntrar' to='/meseros'>Entrar</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Home;