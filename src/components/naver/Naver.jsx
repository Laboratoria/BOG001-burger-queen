import React from 'react';
import pedido from '../../assets/img/pedido.png';
import ordenLista from '../../assets/img/orden lista.png';
import logout from '../../assets/img/pedido.png';
import './Naver.scss';
import Imagenesnav from '../shared/Imagenesnav';

const naver = () => {
    return (
        <div className="naver">
           <Imagenesnav srcImg={pedido} txtLabel="PEDIDOS" altImg="pedido" />
           <Imagenesnav srcImg={ordenLista} txtLabel="ORDEN LISTA" altImg="orden lista" /> 
           <Imagenesnav srcImg={logout} txtLabel="SALIDA" altImg="salida" />           
        </div>
    )
}

export default naver
