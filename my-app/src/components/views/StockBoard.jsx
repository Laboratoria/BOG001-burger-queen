import React, { useState } from 'react';
import Style from './menu.module.css';
import {Link} from 'react-router-dom';
import NavChef from '../organisms/NavChef';
import Clock from '../organisms/Clock';
import ProfileBox from '../organisms/ProfileBox';
import FormFoodStock from '../templates/FormFoodStock';
import StockReport from '../templates/StockReport';
import { v4 as uuidv4 } from 'uuid';

const StockBoard = ()=>{

  const menuData = [
    { id: uuidv4(), name: 'Hamburguesa', quantity: 8, price: '$10 USD'},
    { id: uuidv4(), name: 'Jugo', quantity: 3, price: '$7 USD'},
    { id: uuidv4(), name: 'Cafe', quantity: 5, price: '$10 USD'},
  ]

  const [menuItems, setMenuItems] = useState(menuData);

  //Add Items selected
  const addItem = (menuItem) => {
    menuItem.id = uuidv4()
    setMenuItems([
      ...menuItems,
      menuItem
    ])
  }

  return(
    <div className={`${Style.container}`}>
      <div className={`${Style.nav}`}>
      <Link to='/'><img src='' alt=''/></Link>
        <ProfileBox />
        <NavChef />
        <Clock />
      </div>
      <div className={`${Style.menu}`}>
        <FormFoodStock addItem={addItem}/>
        <StockReport menuItems={menuItems} />
      </div>
    </div>
  )
}

export default StockBoard;
