import React, { useContext } from "react";
import { P2 } from "./Styling";
import "./Item.scss";
import { WeiterContext } from "../WeiterContext";

export default function Item({ name, price, quantity, grid, id, userRol }) {
  let { deleteProduct } = useContext(WeiterContext);

  const handleDelete = () => {
    deleteProduct(id);
  };

  return (
    <div className={"bill-box " + grid}>
      <P2 className="bill-box-quantities">{quantity}</P2>
      <P2>{name}</P2>
      {userRol ? null : (
        <>
          <P2 className="bill-box-price">{"$" + price} </P2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/burger-queen-ad2b2.appspot.com/o/016-delete-min.png?alt=media&token=7783a77e-2f23-4c94-9e1f-bcefbaaf8c04"
            alt="delete"
            className="bill-box-delete"
            onClick={handleDelete}
          ></img>
        </>
      )}
    </div>
  );
}
