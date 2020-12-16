import React from 'react'
import check from '../images/cheque.svg'
import checkValido from '../images/comprobado.svg'

import './styles/check.css'
function Check (props){
  function validando(e) {
    e.target.setAttribute( 'src', checkValido);
    e.target.setAttribute('alt', 'check');

    const guardoName = props.name;
  
    const dataFirebase = {nombre:guardoName, pedido:props.pedidoF }
    console.log(dataFirebase);
  }

 
    return (
        <div className='check'>
          <img className='imgCheck' src={check}  onClick={validando} alt='imagen'/>
  </div>
    )
}

export default Check