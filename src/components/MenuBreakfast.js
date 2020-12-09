import React from "react";
import breakfast from "../data/breakfast.json";
import "../App.css";
import IconButton from '@material-ui/core/IconButton'

export const MenuBreakfast = () => {
  <IconButton aria-label="send" onClick={console.log('clicked')}>
    
  </IconButton>
  return (
    <div className="takeOrder-container">
      <div className="menuBreakfast-container">
        <h1>Desayunos</h1>
        {breakfast.map((data, key) => {
          return (
            <div key={key}>
              {data.item +
                "  " +
                " $" +
                data.price}
            </div>
          );
        })}
        <h1> </h1>
      </div>
      <div className="order-container">
        <h1>Pedido</h1>
        {breakfast.map((data, key) => {
          return (
            <div key={key}>
              {data.item +
                "  " +
                " $" +
                data.price}
            </div>
          );
        })}
        <h1> </h1>
      </div>
    </div>
  );
};