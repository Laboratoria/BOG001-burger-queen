// Button.jsx
import React from 'react';

const Button = props => {
  return (
	<div>
	  <button type="button">{props.text} </button>
	</div>
  );
};

export default Button;

// index.jsx
import React from 'react';
import Button from './components/Button';

ReactDOM.render(
  <Button text="¡Hola!" />,
  document.getElementByid('root'),
);
