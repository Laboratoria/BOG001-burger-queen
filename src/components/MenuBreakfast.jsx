import React from "react";
import breakfast from "../data/breakfast.json";
import AskName from "./AskName";

const MenuBreakfast = () => {

  const order = [
    {
    client: '',
    products:[ {
      id: '100',
      item: 'Hamburguesa simple res',
      price: 10,
    },
    {
      id: '300',
      item: 'Jugo natural de fruta',
      price: 5,
    },
  ]}];

  const Aumentar = (event)=>{
    console.log("Button ", event.target.id, " has been clicked")
  }

  const Disminuir = (event) => {
    console.log("Button ", event.target.id, " has been clicked")
  }

    const Eliminar = (event) => {
      console.log("Button ", event.target.id, " has been clicked")
  }

  return (
    <div className="takeOrder-container">
      <div className="menuBreakfast-container">
        <h1>Desayunos</h1>
        {breakfast.map((data, key) => {
          return (
            <div key={key}>
              <button id={data.id} className="button" onClick={Aumentar}> + </button>
              <button id={data.id} className="button" onClick={Disminuir}> - </button>
              <button id={data.id} className="button" onClick={Eliminar}> x </button>
              {data.item +
                "  " +
                " $" +
                data.price}
            </div>
          )
        })}
      </div>
      <div className="order-container">
        <h1>Pedido</h1>
        <div className="list-container">
          {order.map((item, key)=>{
            return (
              //<div key={key}>
              //{key.id} - {item.id} - {item.qty} - {breakfast.find(elem => elem.id === item.id).item}
              //</div>
              <div><AskName /> </div>
            );
          })}
        </div>
        <div className="totalOrder">Total: </div>
        <div><button className="button"> confirmar </button></div>
      </div>
    </div>
  );
};

export default MenuBreakfast;