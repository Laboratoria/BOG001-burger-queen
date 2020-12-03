import './Header.scss';
import React from 'react';
import { render } from '@testing-library/react';
import logoNav from '../img/logoHeader.jpg';


const Header = () => {
    render() 
        return (
            <nav className="containerNav">
                <img src={logoNav} alt='logoburger' width="5%" />
                Burger Lab
                
            </nav>
        );
        
}

export default Header;