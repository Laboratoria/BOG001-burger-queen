import React from 'react';
import { P2 } from './Styling';
import './ItemOrder.scss';

export default function ItemOrder({
  name, price, quantity, id, userRol,
}) {
  return (
    <tr className="item-order">

      <td><P2>{quantity}</P2></td>
      <td><P2>{name}</P2></td>
      {userRol ? <td />
        : (
          <td>
            <P2>
              {`$${price}`}
              {' '}
            </P2>
          </td>
        )}
    </tr>
  );
}
