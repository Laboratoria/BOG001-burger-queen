import React, {Fragment, useEffect, useState} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import menus from '../menu.json'

const Menu = () => {
    const [menu, setMenu] = useState(menus)

    return ( 
        <Fragment>
            {
            menu.breakfast.map(element => 
            <tr key={ element.id}>
             <td>{element.item}</td>
            <td>{element.price}</td>
            </tr>
           )
            }
        </Fragment>

    );
}

const BackgroundWaiters = () => {
    return ( 
    <Fragment>
<div className="backgroundKitchen">
        <Navigation/>
        <div>
            <Menu/>
        </div>
        
        <Footer/>
    </div>
    </Fragment>
    );
}

export default BackgroundWaiters;