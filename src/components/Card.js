import React from 'react';
import {H2} from './Styling';

function Card() {
  return(
  <>
    <div className='card'>
      <H2 className='card-name'>Hamburguesa Simple</H2>
      <div className='card-info'>
      <img src="https://firebasestorage.googleapis.com/v0/b/burger-queen-ad2b2.appspot.com/o/burger.png?alt=media&token=69768354-8921-4a33-b1f8-91e0fc0c0c46" alt="food" />
      <H2 className='card-info-price'> $10</H2>
      </div>
      <div>
      <input type="number" className='card-info-in' />
      <button className='card-btn'>Agregar</button>
      </div>
    </div>
  </>
  )}

  export default Card

