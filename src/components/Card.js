import React, { useState, useContext } from 'react';
import { H2 } from './Styling';
import Button from './button';
import './Card.scss';
import { AppContext } from '../AppContext';

function Card({ name, price, img }) {
  const { clickToOpen, addProduct } = useContext(AppContext);

  const [count, setCount] = useState(1);

  const handleInputChanges = (e) => {
    setCount(e.currentTarget.value);
  };
  const handleModal = () => {
    clickToOpen(name, price);
  };

  const handleClick = () => {
    addProduct({
      name,
      quantity: parseInt(count, 10),
      price: price * count,
      id: Math.floor(Math.random() * 100),
    });
    setCount(1);
  };
  return (
    <>
      <div className="card">
        <H2 className="card-name">{name}</H2>

        <img
          className="card-info-item"
          src={img}
          alt="food"
          width="40"
          height="40"
        />
        <H2 className="card-info-price">{`$ ${price}`}</H2>
        {name.includes('Hamburguesa') ? (
          <>
            <Button
              id={name}
              cName="card-btn btn-default confirm card-options"
              text="Opciones"
              onClick={handleModal}
            />
          </>
        ) : (
          <>
            <label
              htmlFor={`${name}quantity`}
              className="card-info-input"
            >
              <input
                value={count}
                name={name}
                data-price={price}
                type="number"
                onChange={(e) => handleInputChanges(e)}
              />
            </label>
            <Button
              cName="card-btn btn-default confirm"
              text="Agregar"
              onClick={handleClick}
            >
              {' '}
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default Card;
