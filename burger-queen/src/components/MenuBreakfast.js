import breakfast from "../data/breakfast.json";
import React from "react";
import "../App.css";

export const MenuBreakfast = () => {
  return (
    <>
      <div className="menuBreakfast-container">
        <h1>Menu Desayunos</h1>
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
    </>
  );
};