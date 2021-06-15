import React, {useState} from "react";
import breakfast from "../data/breakfast.json";

const MenuBreakfast = () => {

  const [articles, setArticles] = useState([]);

  const Aumentar = () =>{
    setArticles(articles+1);
  }

  return (
    <div className="takeOrder-container">
      <div className="menuBreakfast-container">
        <h1>Desayunos</h1>
        {breakfast.map((data, key) => {
          return (
            <div key={key}>
              <button id={data.id} className="button" onClick={Aumentar}> + </button>
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
        {articles}
        {data.id}
        <div className="totalOrder">Total: {articles}</div>
        <button className="button"> ordenar </button>
      </div>
    </div>
  );
};

export default MenuBreakfast;