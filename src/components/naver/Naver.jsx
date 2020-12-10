import React from 'react';
import pedido from '../../assets/img/pedido.png';
import ordenLista from '../../assets/img/orden lista.png';
import logout from '../../assets/img/salida.png';
import './Naver.scss';
import Imagenesnav from '../shared/Imagenesnav';

const naver = () => {
    return (
        <div className="slidebar">
            <ul>
                <Imagenesnav srcImg={pedido} txtLabel="PEDIDOS" altImg="pedido" />
                <Imagenesnav srcImg={ordenLista} txtLabel="ORDEN LISTA" altImg="orden lista" /> 
                <Imagenesnav srcImg={logout} txtLabel="SALIDA" altImg="salida" />   
            </ul>            
        </div>
    )
}
export default naver
