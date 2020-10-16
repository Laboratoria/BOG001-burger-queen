
import React,  { useState, useEffect }from 'react'
import Tab from '../Tab'
import db from '../../firebaseConfig.js'


export default function NuevaOrden() {
  const [menu,setMenu] = useState([]);

  const getMenu = async () => {
    console.log(123)
    db.collection("Menu").get()
    .then(querySnapshot => {
  
      const tabMenu = [];
      const modalMenu = [];
      querySnapshot.forEach((doc) => {
     
        if( doc.id === 'Breakfast' || doc.id === 'Lunch'){
         
        tabMenu.push({ menu: Object.values(doc.data()), id: doc.id === 'Breakfast'? 'Desayuno' : 'Fuerte' })
        } else{
          modalMenu.push({ menu: Object.values(doc.data()), id: doc.id === 'Options'? 'Carne' : 'Adicionales' })
        }
      });
    //console.log(tabMenu, modalMenu)
     setMenu(tabMenu)
    });
  };
  getMenu()
  return (
    <div>
      <Tab menu={menu}></Tab>
    </div>
  )
};
