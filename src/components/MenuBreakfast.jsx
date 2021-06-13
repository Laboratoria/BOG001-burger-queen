import React from "react";
import breakfast from "../data/breakfast.json";
import "../App.css";


export const MenuBreakfast = () => {

  return (
    <div className="takeOrder-container">
      <div className="menuBreakfast-container">
        <h1>Desayunos</h1>
        {breakfast.map((data, key) => {
          return (
            <div key={key}>
              <button className="item">
                {data.item +
                  "  " +
                  " $" +
                  data.price}
              </button>
            </div>
          );
        })}
      </div>
      <div className="order-container">
        <h1>Pedido</h1>
        {breakfast.map((data, key) => {
          return (
            <div key={key}>
              <button className="eraseItem"> - </button>
              {data.item +
                "  " +
                " $" +
                data.price}
            </div>
          );
        })}
        <h1> </h1>
        <div className="totalOrder">Total: </div>
        <button className="saveOrder"> ordenar </button>
      </div>
    </div>
  );
};

export default MenuBreakfast;