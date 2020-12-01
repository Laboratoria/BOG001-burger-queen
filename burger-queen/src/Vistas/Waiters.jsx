import React, {Fragment, useEffect, useState} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import menus from '../menu.json'

const Clients = () => {
    return ( 
        <div>
            <label>Cliente: <input type="text"></input></label> 
        </div>
     );
}
 


const Menu = () => {
    const [menu, setMenu] = useState(menus)

    return ( 
        <Fragment>
            <div className= 'menuBreak'>
            <Clients/>    
            {
            menu.breakfast.map(element => 
            <li  key={ element.id}>
            <li className= 'itemsBreak'>{element.item} {element.us} {element.price}</li>
            </li>
            )
            }
            </div>
            
        </Fragment>

    );
}

const BackgroundWaiters = () => {
    return ( 
    <Fragment>
<div className="backgroundKitchen">
        <Navigation/>
        <Menu/>
        <Footer/>
    </div>
    </Fragment>
    );
}

export default BackgroundWaiters;