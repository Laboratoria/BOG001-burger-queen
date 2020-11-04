import React, { useContext } from 'react';
import { P2 } from './Styling';
import './Item.scss';
import { AppContext } from '../AppContext';
import Delete from '../assets/delete.svg';

export default function Item({
  name, price, quantity, grid, id, userRol,
}) {
  const { deleteProduct } = useContext(AppContext);

  const handleDelete = () => {
    deleteProduct(id);
  };

  return (
    <div className={`bill-box ${grid}`}>
      <P2 className="bill-box-quantities">{quantity}</P2>
      <P2>{name}</P2>
      <P2 className="bill-box-price">
        {`$${price}`}
        {' '}
      </P2>
      <img
        src={Delete}
        alt="delete"
        className="bill-box-delete"
        onClick={handleDelete}
      />
    </div>
  );
}
