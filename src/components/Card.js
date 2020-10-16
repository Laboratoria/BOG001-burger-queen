import React from 'react';
import {H2} from './Styling';
import Button from './Button'
import './Card.scss';

function Card(props) {
  return(
  <>
    <div className='card'>
      <H2 className='card-name'>{props.name}</H2>

      <img  className='card-info-item' src="https://firebasestorage.googleapis.com/v0/b/burger-queen-ad2b2.appspot.com/o/burger.png?alt=media&token=69768354-8921-4a33-b1f8-91e0fc0c0c46" alt="food" />
      <H2 className='card-info-price'>{'$ ' + props.price}</H2>


      <input type="number" className='card-info-input' />
      <Button cName='card-btn confirm' text='Agregar'> </Button>



    </div>
  </>
  )}

  export default Card

