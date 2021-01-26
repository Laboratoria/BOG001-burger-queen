import React, { useState } from 'react';
import Style from './counter.module.css';

const Counter = () => {

    const [quantity, setquantity] = useState(1)

    const reduceQuantity = () => {
        setquantity( quantity - 1 );
    }

    const addQuantity = () => {
        setquantity( quantity + 1 );
    }

    return ( 
        <div className={`${Style.quantityBox}`}>
        <button 
        className={`${Style.quantityBtn}`} 
        onClick={reduceQuantity}>-</button>

        <p className={`${Style.quantity}`}>{quantity}</p>

        <button
        className={`${Style.quantityBtn}`} 
        onClick={addQuantity}>+</button>
        </div>
     );
}
 
export default Counter;