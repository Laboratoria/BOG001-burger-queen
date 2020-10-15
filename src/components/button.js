
import React from 'react';
import './Button.scss'

const Button = props => {
  return (
	<div>
	  <button  className=  {props.cName + "btn-default"} type="button">{props.text}</button>
	</div>
  );
};

export default Button;

