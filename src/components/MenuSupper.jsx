import React from "react";
import supper from "../data/supper.json";

const MenuSupper = () => {
  return (
    <>
      <div className="menuSupper-container">
        <h1>Almuerzos y Cenas</h1>
        {supper.map((data, key) => {
          return (
            <div key={key}>
                <button id={data.id} className="button"> + </button>
                <button id={data.id} className="button"> - </button>
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

export default MenuSupper