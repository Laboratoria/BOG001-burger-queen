import React, { useState, useEffect } from "react";
import Tab from "../Tab";
import db from "../../firebaseConfig.js";
import Modal from "../Modal";
import Bill from "../Bill"

const NuevaOrden = () => {
  const [menu, setMenu] = useState([]);
  const [modal, setModal] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const clickToOpen = () => setIsOpen(true)

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
            localStorage.setItem("info", modalMenu);
          }
        });
        setMenu(tabMenu);
        setModal(modalMenu);
      });
  }, []);

  return (
    <div>
      <Tab menu={menu} clickToOpen={clickToOpen}></Tab>
     <Modal info={modal} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
     <Bill></Bill>
    </div>
  );
};

export default NuevaOrden;
