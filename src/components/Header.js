import React from 'react';
import './Header.scss';
import { render } from '@testing-library/react';
import logoNav from '../img/imagenHeader.png';
import textBurger from '../img/BURGERlogo.png';
import textLab from '../img/lablogo.png';
import heart from '../img/heart.png';
import user from '../img/usuario.png';

const Header = () => {
    render() 
        return (
            <nav className="containerNav">
                <img src={logoNav} className="logoNav" alt="logoburger"  />
                <img src={textBurger} className="textBurger" alt="logoburger" />
                <img src={textLab} className="textLab" alt="logoburger" />
                <img src={heart} className="heart" alt="logolab" />

                <div className="containerNav2">
                    <h4>Hola ________ 
                        <img src={user} className="user" alt='logouser' width="35px" height="35px"/> 
                    </h4>
                </div>
            </nav>
        );
}

export default Header;