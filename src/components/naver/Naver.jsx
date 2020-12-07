import React from 'react';
import pedido from '../../assets/img/pedido.png';
import ordenLista from '../../assets/img/orden lista.png';
import logout from '../../assets/img/pedido.png';
import './Naver.scss';

const naver = () => {
    return (
        <div className="naver">
            <div className="pedidos">
                <img src={pedido} className="pedido" alt="pedido" />
                <p>PEDIDOS</p>
            </div>
            <div className="ordenLista">
                <img src={ordenLista} className="ordenLista" alt="Orden Lista" />
                <p>ORDEN LISTA</p>
            </div>
            <div className="cerrar">
                <img src={logout} className="logOut" alt="Cerrar sesión" />
                <p>CERRAR SESIÓN</p>
            </div>
            
        </div>
    )
}

export default naver
