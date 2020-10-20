import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button
      className={props.cName + " btn-default"}
      type="button"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
