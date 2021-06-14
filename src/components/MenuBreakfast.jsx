import React from "react";
import breakfast from "../data/breakfast.json";

export const MenuBreakfast = () => {

  return (
    <div className="takeOrder-container">
      <div className="menuBreakfast-container">
        <h1>Desayunos</h1>
        {breakfast.map((data, key) => {
          return (
            <div key={key}>
              <button id={data.id} className="button"> + </button>
              <button id={data.id} className="button"> - </button>
              {data.item +
                "  " +
                " $" +
                data.price}
            </div>
          );
        })}
      </div>
      <div className="order-container">
        <h1>Pedido</h1>
        <h1> </h1>
        <div className="totalOrder">Total: </div>
        <button className="button"> ordenar </button>
      </div>
    </div>
  );
};

export default MenuBreakfast;