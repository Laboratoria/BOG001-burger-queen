import React from 'react';
import './Button.scss';

const Button = ({ cName, onClick, img, text }) => (
  <button
    className={cName}
    type="button"
    onClick={onClick}
  >
    {img}
    {text}
  </button>
);

export default Button;
