import React, { Fragment, useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import menus from '../menu.json'
const Clients = ({ infoInput, getInput }) => {
    const updateNewTaskValue = e => getInput(e.target.value);
    return (
        <div className="containerCliente" >
            <label>Cliente: <input type="text"
                value={infoInput}
                onChange={updateNewTaskValue}
            />
            </label>
        </div>
    );
}
const Request = ({ showName, getOrder, setNewOrder, newBreakItem }) => {
    console.log(getOrder)
    return (
        <div className="containerRequest">
            <h3>{showName}</h3>
            {
            getOrder.map(element =>
            <div  key={element.id}>
                {element.Item} {element.Us} {element.Price}
            </div>
        )
            }
      
        </div>
    );
}
const ItemsBreakfast = ({ showItemBreak, showItemPrice, showItemUs, updateOrder }) => {
    return (
        <Fragment>
            {
                < div onClick={() => updateOrder({
                    Item: showItemBreak,
                    Us:showItemUs,
                    Price: showItemPrice
                })}
                    key={showItemBreak.id} className="itemsBreak"> {showItemBreak}
                    < div className="itemsPrice" >
                        {showItemUs} {showItemPrice}
                    </div >
                </div >
            }
        </Fragment>
    );
}
const MenuLunch = () => {
    const [menuLunch] = useState(menus)
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
    const [cena, setCena] = useState(false);
    const showCena = () => setCena(!cena)
    const [newTaskName, setNewTaskName] = useState("")
    const [itemBreak, setItemBreak] = useState(menus)
    const [itemPrice, setItemPrice] = useState(menus)
    const [order, setOrder] = useState([])
    const updateOrder = (newItemBreak) => {
        setOrder(prevState => {
            return [...prevState, newItemBreak]
        })
    }
    return (
        <Fragment>
            <div className="backgroundKitchen">
                <Navigation showMenuCena={showCena} />
                <div className="containerGlobal">
                    <div className="menuBreak">
                        <Clients infoInput={newTaskName} getInput={setNewTaskName} />
                        {cena ?
                            <MenuLunch /> :
                            itemBreak.breakfast.map(element =>
                                <ItemsBreakfast updateOrder={updateOrder} key={element.id} showItemBreak={element.item} showItemPrice={element.price} showItemUs={element.us} />
                            )
                        }
                    </div>
                    <Request showName={newTaskName} getOrder={order} setNewOrder={setOrder} newBreakItem={itemBreak} 
                    />
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}
export default MenuBreakfast;


