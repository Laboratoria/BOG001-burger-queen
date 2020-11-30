import React, {Fragment, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHamburger, faTimes} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


const Navigation =() => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Fragment>
        <div  className="navigation">
            <Link to='#' className='menu-bars'>
            <FontAwesomeIcon onClick={showSidebar} icon ={faHamburger}/>
            </Link>
            <div className ='title'>
            <h2>BURGER</h2>
            <h3>QUEEN</h3>
            </div>
        </div>
        <div className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            <div  className='nav-menu-items'>
            <ul>
                <li className='menu-bars'>
                <Link to='#' >
                    <FontAwesomeIcon onClick={showSidebar} icon={faTimes}/>
                </Link>    
                </li>
                <li className='nav-text'>Desayuno</li>
                <li className='nav-text'>Almuerzo y Cena</li>
            </ul>
            </div>
        </div>
        </Fragment>
       
    )
}


export default Navigation;