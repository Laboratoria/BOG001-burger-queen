import { render } from '@testing-library/react';
import React from 'react';
import './Client.scss';

const Client = () => {
    render() 
        return(
            <div className="formNombre">
                <form>
                    <label className="texto"> 
                        Nombre del cliente :
                        <input type="text" size="40" className="nombreC" name="name" required />
                    </label>
                </form>
            </div>
        )
}

export default Client;