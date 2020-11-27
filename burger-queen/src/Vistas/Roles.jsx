import React from 'react';
import {Link} from "react-router-dom";
import Navigation from './Navigation'
import Footer from './Footer';
const { Fragment } = require("react");

const Roles = () => {
    return (
        <Fragment>
        <div className ="roles">
        <div className="mesera">
        <img src= "./Imagenes/mesera.png" alt="meseros"></img>
        <Link to="/mesa" className="mese">MESER@S</Link>
        </div>
        <div className="cocinera">
        <img src= "./Imagenes/cocinera.png" alt="meseros"></img>
        <Link to="/cocina">COCINA</Link>
        </div>
        </div>    
        </Fragment>
            
    )
}


function BackgroundRoles () {
    return (
        <div className="backgroundRoles">
        <Navigation/>    
        <h1>ESCOGE TU ROL</h1>
        <Roles />
        <Footer/>
        </div>
    )
}

export default BackgroundRoles