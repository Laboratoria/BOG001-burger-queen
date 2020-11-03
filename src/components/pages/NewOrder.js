import React, { useState, useEffect } from "react";
import Tab from "../Tab";
import { db } from "../../firebaseConfig.js";
import Modal from "../Modal";
import Bill from "../Bill";
import NavBar from "../Navbar";

const NewOrder = () => {
  const [menu, setMenu] = useState([]);
  const [modal, setModal] = useState([]);

  useEffect(() => {
    db.collection("Menu")
      .get()
      .then((querySnapshot) => {
        const tabMenu = [];
        const modalMenu = [];

        querySnapshot.forEach((doc) => {
          if (doc.id === "Breakfast" || doc.id === "Lunch") {
            return tabMenu.push({
              menu: Object.values(doc.data()),
              id: doc.id === "Breakfast" ? "Desayuno" : "Fuerte",
            });
          } else {
            modalMenu.push({
              menu: Object.values(doc.data()),
              id: doc.id === "Options" ? "Carne" : "Adicionales",
            });
          }
        });
        setMenu(tabMenu);
        setModal(modalMenu);
      });
  }, []);

  return (
    <>
      <NavBar rol="mesero" />
      <section style={{ display: "flex" }}>
        <Tab menu={menu}></Tab>
        <Modal info={modal}></Modal>
        <Bill></Bill>
      </section>
    </>
  );
};

export default NewOrder;
