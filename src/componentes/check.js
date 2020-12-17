import React from 'react'
import check from '../images/cheque.svg'
import checkValido from '../images/comprobado.svg'
import guardarPedidosfs from"../firebaseguardarpedido"



import './styles/check.css'





function Check (props){
  function validando(e) {
    e.target.setAttribute( 'src', checkValido);
    e.target.setAttribute('alt', 'check');

    const guardoName = props.name;
  
    const dataFirebase = {nombre:guardoName, pedido:props.pedidoF, adicion:props.adiciones }
    console.log(dataFirebase);
    guardarPedidosfs(dataFirebase)
  }

 
    return (
        <div className='check'>
          <img className='imgCheck' src={check}  onClick={validando} alt='imagen'/>
  </div>
    )
}

export default Check