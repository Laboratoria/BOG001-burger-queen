import React, { Fragment, useState} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import menus from '../menu.json'
import { db } from '../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt}  from '@fortawesome/free-solid-svg-icons';

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
const Request = ({ showName, getOrder, setNewOrder, newBreakItem, addRequest, setName, updateOrder }) => {

    let totalOrder = getOrder.reduce((sum, value) => (typeof value.Price == "number" ? sum + value.Price : sum), 0);
    const carrito ={}

    const sendOrder = () => {
        addRequest({
            name: showName,
            order: getOrder,
            total: totalOrder,
        })
        totalOrder = 0;
        setNewOrder([]);
        setName("");
    }
    
    const deleted = (id) => {
        const deletedOrder = getOrder.filter ((item, index) => index !== id);
        setNewOrder(deletedOrder)
    }

    return (
        <div className="containerRequest">
            <div className="nameClients">
                <h3>Cliente: {showName}</h3>
            </div>
            {
                getOrder.map((element, index )=>
                        <div className="containerOrder" key={index} >
                            {element.Quantity}
                            {element.Item}
                            <div className="containerPrice">
                                {element.Us} {element.Price}
                            </div>
                            <div><FontAwesomeIcon icon={faTrashAlt} onClick={() => deleted(index)}/></div>
                        </div>
                        
                )
                }
            <div className="totalPrice">Total = $ {totalOrder}</div>
            <div className="divEnviar"><button className="enviar" onClick={sendOrder}>Enviar</button></div>
        </div>
    );
}
const ItemsBreakfast = ({ showItemBreak, showItemPrice, showItemUs, updateOrder, idBreak}) => {
    return (
        <Fragment>
            {
                < div onClick={() => updateOrder({
                    Item: showItemBreak,
                    Us: showItemUs,
                    Price: showItemPrice,
                    Id: idBreak,
                    Quantity: 1
                })
            }
                    className="itemsBreak">  {showItemBreak}
                    < div className="itemsPrice" >
                        {showItemUs} {showItemPrice}
                    </div >
                    
                </div >
            } 
        </Fragment>
    );
}
const MenuLunch = ({ updateOrder, showItemLunch, showLunchPrice, showLunchUs, idLunch}) => {

    return (
        <Fragment>
            {
                < div onClick={() => updateOrder({
                    Item: showItemLunch,
                    Us: showLunchUs,
                    Price: showLunchPrice,
                    Id:idLunch,
                    Quantity: 1
                })}
                    className="itemsLunch"> {showItemLunch}
                    < div className="itemsPrice" >
                        {showLunchUs} {showLunchPrice}
                    </div >
                </div >
            }
        </Fragment>
    );
}
const MenuBreakfast = () => {
    const [cena, setCena] = useState(false);
    const showCena = () => setCena(!cena)
    const [newTaskName, setNewTaskName] = useState("")

    const [itemMenu, setItemMenu] = useState(menus)
    const [itemPrice, setItemPrice] = useState(menus)

    const [order, setOrder] = useState([])
    
    const updateOrder = (newItemBreak) => {
        setOrder(prevState => {
            return [...prevState, newItemBreak]
        })
    }
    const sendKitchen = async (orderMenu) => {
        await db.collection("order").doc().set(orderMenu);
        console.log("nueva orden")
    }


    return (
        <Fragment>
            <div className="backgroundKitchen">
                <Navigation showMenuCena={showCena} />
                <div className="containerGlobal">
                    <div className="menuBreak">
                        <Clients infoInput={newTaskName} getInput={setNewTaskName} />
                        {cena ?
                            <div className="containerLunch">
                                {
                                    itemMenu.lunch.map(e =>
                                        <MenuLunch updateOrder={updateOrder} key={e.id} idLunch={e.id} showItemLunch={e.item} showLunchPrice={e.price} showLunchUs={e.us} />)
                                }
                            </div>
                            :
                            itemMenu.breakfast.map(element =>
                                <ItemsBreakfast updateOrder={updateOrder} key={element.id} idBreak={element.id} showImage={element.img} showItemBreak={element.item} showItemPrice={element.price} showItemUs={element.us} />
                            )
                        }
                    </div>
                    <Request addRequest={sendKitchen} showName={newTaskName} setName={setNewTaskName} getOrder={order} setNewOrder={setOrder} newBreakItem={itemMenu}
                    />
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}
export default MenuBreakfast;


