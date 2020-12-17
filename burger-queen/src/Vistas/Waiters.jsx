import React, { Fragment, useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import menus from '../menu.json'
import { db } from '../firebase'

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
const Request = ({ showName, getOrder, setNewOrder, newBreakItem, addRequest }) => {
    const totalOrder = getOrder.reduce((sum, value) => (typeof value.Price == "number" ? sum + value.Price : sum), 0);

    const initialStateValues = {
        name: showName,
        order: getOrder,
        total: totalOrder
    }

    const [values, setValues] = useState(initialStateValues)

    /*const updateKitchen = (initialStateValues) => {
        setValues(prevState => {
            return [...prevState, initialStateValues]
        })
    } */

    const sendOrder = () => {
        addRequest({
            name: showName,
            order: getOrder,
            total: totalOrder
        })
        setValues({...values })
    }

    return (
        <div className="containerRequest">
            <div className="nameClients">
                <h3>Cliente: {showName}</h3>
            </div>
            {
                getOrder.map(element =>
                    <h4 key={element.id}>
                        <div className="containerOrder">
                            {element.Item}
                            <div className="containerPrice">
                                {element.Us} {element.Price}
                            </div>
                        </div>
                    </h4>
                )
            }
            <div className="totalPrice">Total = $ {totalOrder}</div>
            <div className="divEnviar"><button className="enviar" onClick={sendOrder}>Enviar</button></div>
        </div>


    );
}
const ItemsBreakfast = ({showImg, showItemBreak, showItemPrice, showItemUs, updateOrder }) => {
    return (
        <Fragment>
            {
                < div onClick={() => updateOrder({
                    Item: showItemBreak,
                    Us: showItemUs,
                    Price: showItemPrice
                })}
                    className="itemsBreak">  {showItemBreak}
                    < div className="itemsPrice" >
                        {showItemUs} {showItemPrice}
                    </div >
                </div >
            }
        </Fragment>
    );
}
const MenuLunch = ({ updateOrder, showItemLunch, showLunchPrice, showLunchUs }) => {

    return (
        <Fragment>
            {
                < div onClick={() => updateOrder({
                    Item: showItemLunch,
                    Us: showLunchUs,
                    Price: showLunchPrice
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
    const [orderComplete, setCompleteOrder] = useState([])

    const updateOrder = (newItemBreak) => {
        setOrder(prevState => {
            return [...prevState, newItemBreak]
        })
    }
    const sendKitchen = async (orderMenu) => {
        await db.collection("order").doc().set(orderMenu);
        console.log("nueva orden")
    }

    const getOrderToKitchen = () => {
        db.collection("order").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
            });
            console.log(docs)
            setCompleteOrder(docs);
        });
    }

    useEffect(() => {
        getOrderToKitchen();
    }, []);

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
                                        <MenuLunch updateOrder={updateOrder} key={e.id} showItemLunch={e.item} showLunchPrice={e.price} showLunchUs={e.us} />)
                                }
                            </div>
                            :
                            itemMenu.breakfast.map(element =>
                                <ItemsBreakfast updateOrder={updateOrder} key={element.id} showItemBreak={element.item} showItemPrice={element.price} showItemUs={element.us} />
                            )
                        }
                    </div>
                    <Request addRequest={sendKitchen} showName={newTaskName} getOrder={order} setNewOrder={setOrder} newBreakItem={itemMenu}
                    />
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}
export default MenuBreakfast;


