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
        <nav className={sidebar ? 'nav-menu-active' : 'nav-menu'}>
            <ul onClick={showSidebar} className='nav-menu-items'>
                <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <FontAwesomeIcon icon={faTimes}/>
                </Link>    
                </li>
                <li className='nav-text'>holisss</li>
                <li>porque no sirve</li>
            </ul>
        </nav>
        </Fragment>
       
    )
}


export default Navigation;