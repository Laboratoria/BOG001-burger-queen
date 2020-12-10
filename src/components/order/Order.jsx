import React from 'react';
import { render } from "@testing-library/react";
import './Order.scss'

const Order = () => {
    render();
    return (
        <div className="containerResumeOrder">
            <hr></hr>
            <div className="labelOrder">
                <ul>
                    <li>Producto</li>
                    <li>Cantidad</li>
                    <li>Precio</li>
                </ul>
            </div>

        </div>
    )
}

export default Order
