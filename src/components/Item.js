import React, {useContext} from "react";
import { P2 } from "./Styling";
import "./Item.scss";
import { WeiterContext } from '../WeiterContext'


export default function Item({ name, price, quantity, grid , id}) {
  let { deleteProduct}= useContext(WeiterContext);

  const handleDelete =() =>{
    deleteProduct(id)
  };

  return (
    <div className={"bill-box " + grid}>
      <P2 className="bill-box-quantities">{quantity}</P2>
      <P2>{name}</P2>
      <P2 className="bill-box-price">{"$" + price}</P2>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/burger-queen-ad2b2.appspot.com/o/delete%201.png?alt=media&token=5f147f45-3ed0-472a-b691-5134bc213a7a"
        alt="delete"
        className="bill-box-delete"
        onClick ={handleDelete}
      ></img>
    </div>
  );
}
