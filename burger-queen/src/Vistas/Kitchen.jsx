import React, {Fragment, useState, useEffect} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { db } from '../firebase';

const FirebaseKitchen = () => {
    const [completeOrder, setCompleteOrder] = useState([])
    const getOrderToKitchen = () => {
        db.collection("order").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data(), id:doc.id})
            });
            setCompleteOrder(docs);
        });
    }
    
    useEffect(() => {
        getOrderToKitchen()   
    }, []);

    return ( 
        <Fragment>
            <div className="containerOrder">
            {
            completeOrder.map(item => {
                return (
                    <div className="backgroundOrder">
                        <div className="containerName">
                        Cliente: {item.name}
                        </div>
                        {item.order.map(e => 
                            {
                                return(
                                    <div className="orderKitchen">
                                        {e.Item}
                                    </div>
                                )
                            })}
                    </div>
                    
                )
            })
            }
        </div>
        </Fragment>
    );
}


const BackgroundKitchen = () => {
    return ( 
    <Fragment>
<div className="backgroundKitchen">
        <Navigation/>
        <FirebaseKitchen/>
        <Footer/>
    </div>
    </Fragment>
    );
}

export default BackgroundKitchen;