import React, { useState } from 'react';
import Style from './menu.module.css';
import {Link} from 'react-router-dom';
import NavWaiter from '../organisms/NavWaiter';
import Clock from '../organisms/Clock';
import ProfileBox from '../organisms/ProfileBox';
import ChooseFood from '../templates/ChooseFood';
import CommandMenu from '../templates/CommandMenu';
import { v4 as uuidv4 } from 'uuid';

const Menu = (props)=>{
  // Check it to debbug checkbox form https://ibaslogic.com/react-form-handling/
  const menuData = [
    { id: uuidv4(), item: 'Hamburguesa', quantity: 8, price: 10},
    { id: uuidv4(), item: 'Jugo', quantity: 3, price: 7},
    { id: uuidv4(), item: 'Cafe', quantity: 5, price: 10},
  ]

  const [menuItems, setMenuItems] = useState(menuData);

  //Add Items selected
  const addItem = (menuItem) => {
    menuItem.id = uuidv4()
    console.log(menuItem)
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
        <NavWaiter />
        <Clock />
      </div>
      <div className={`${Style.menu}`}>
        <ChooseFood addItem={addItem}/>
        <CommandMenu  menuItems={menuItems}/>
      </div>
    </div>
  )
}

export default Menu;
