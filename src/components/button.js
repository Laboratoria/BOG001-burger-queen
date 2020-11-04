import React from 'react';
import './Button.scss';

const Button = (props) => (
  <button
    className={props.cName}
    type="button"
    onClick={props.onClick}
  >
    {props.img}
    {props.text}
  </button>
);

export default Button;
