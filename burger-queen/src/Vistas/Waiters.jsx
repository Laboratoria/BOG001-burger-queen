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
const MenuLunch = () => {
    const [menuLunch, setMenuLunch] = useState(menus)
    return ( 
        <Fragment>
            <div className="containerLunch">
            {
            menuLunch.lunch.map(e => 
                <div key={e.id} className="itemsLunch">
                    <h3>{e.type}</h3>
                    {e.item}
                    <div className="priceLunch">
                        {e.us}{e.price}
                    </div>
                </div>)
        }
            </div>
        </Fragment>
    );
}



const MenuBreakfast = () => {

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
                <MenuLunch/>
                    <Request />
                </div>
                
                <Footer />
            </div>
        </Fragment>
    );
}


export default MenuBreakfast;


