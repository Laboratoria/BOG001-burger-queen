import React, { Fragment, useEffect, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import menus from '../menu.json'

const Clients = () => {
    return (
        <div className="containerCliente">
            <label>Cliente: <input type="text"></input></label>
        </div>
    );
}

const Request = () => {
    return (
        <div className="containerRequest">

        </div>
    );
}


export const Menu = () => {

    const [menu, setMenu] = useState(menus)

    const [cena, setCena] = useState(false);
    const showCena = () => setCena(!cena)

    return (
        <Fragment>
            <div className="backgroundKitchen">
                <Navigation showMenuCena={showCena} />
                <div className="containerGlobal">
                <div className={cena ? 'menuBreak-active' : 'menuBreak'}>
                    <Clients />
                    {
                        menu.breakfast.map(element =>
                            <div key={element.id} className="itemsBreak" >{element.item}
                                <div className="itemsPrice">
                                    {element.us} {element.price}
                                </div>
                            </div>
                        )
                    }
                </div>
                    <Request />
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}
export default Menu;


