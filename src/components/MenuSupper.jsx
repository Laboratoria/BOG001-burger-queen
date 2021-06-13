import supper from "../../data/supper.json";
import React from "react";
import "../App.css";

export const MenuSupper = () => {
  return (
    <>
      <div className="menuSupper-container">
        <h1 color="white">Almuerzos y Cenas</h1>
        {supper.map((data, key) => {
          return (
            <div key={key}>
              {data.item +
                " " +
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

export default MenuSupper;