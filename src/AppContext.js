import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";

const AppContext = React.createContext();
let { Provider, Consumer } = AppContext;

export default function WeiterProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [burger, stateBurger] = useState({});
  const clickToOpen = (name, price) => {
    stateBurger({ name: name, price: price });
    setIsOpen(true);
  };
  const clickToClose = () => setIsOpen(false);

  const [bill, setBill] = useState([]);
  const addProduct = (values) => setBill([...bill, values]);

  const deleteProduct = (id) => {
    let filtered = bill.filter(function (el) {
      return el.id !== id;
    });
    setBill(filtered);
  };

  const [order, setOrder] = useState([]);
  const [idOrder, setIdOrder] = useState(1);

  useEffect(() => {
    db.collection('orders')
    .orderBy('date', 'desc')
    .onSnapshot((querySnapshot)=> {
      const arrayData =[]
      querySnapshot.forEach(doc => {
       const data= doc.data()
        arrayData.push({...data, idDoc:doc.id})
    })
    setOrder(arrayData);
    setIdOrder(arrayData.length)
  })
  },[])






  return (
    <Provider
      value={{
        isOpen,
        clickToOpen,
        clickToClose,
        bill,
        setBill,
        addProduct,
        deleteProduct,
        burger,
        stateBurger,
        order,
        idOrder,
      }}
    >
      {children}
    </Provider>
  );
}

export { WeiterProvider, AppContext, Consumer };
