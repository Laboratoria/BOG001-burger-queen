import React, {useState} from "react";
import breakfast from "../data/breakfast.json";
import ListItem from './ListItem';

const pedido = {
  cliente: '',
  productos: [
    {
      id: '100',
      qty: 2,
      price: 5,
    },
    {
      id: '300',
      qty: 1,
      price: 7,
    }
  ]
}


const MenuBreakfast = () => {

  const [qty, setQty] = useState(0);

  const Aumentar = () =>{
    setQty(qty+1);
  }

  const Disminuir = () =>{
    setQty(qty-1);
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
          {pedido.productos.map((item, index)=>{
            return (
              <div>
              {item.id} - {item.qty} - {breakfast.find(elem => elem.id === item.id).item}
              </div>
            );
          })}
          
        </div>
        <div className="totalOrder">Total: 
        <button className="button"> ordenar </button>
      </div>
    </div>
    </div>
  );
};

export default MenuBreakfast;