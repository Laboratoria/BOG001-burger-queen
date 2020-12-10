import { render } from '@testing-library/react';
import React from 'react';
import './Client.scss';

const Client = () => {
    render() 
        return(
            <div className="containerNameClient">
                <form className="nameClient">
                    <label className="texto"> 
                        Nombre del cliente :
                        <input type="text" size="50" className="txtClient" name="name" required />
                    </label>
                </form>
            </div>
        )
}

export default Client;