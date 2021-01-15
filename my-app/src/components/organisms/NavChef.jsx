import React from 'react';
import {Link} from 'react-router-dom';
import Style from './navbox.module.css';
import KitchenIcon from '../atoms/assets/kitchen.png';
import StockIcon from '../atoms/assets/stock.png';
import ExitIcon from '../atoms/assets/exit.png';

const NavChef = ()=>{
  return(
    <nav className={`${Style.navBox}`}>
      <ul>
        <Link to='/ToPrepare'><img src={KitchenIcon} alt="To prepare view"/></Link>
        <Link to='/StockBoard'><img src={StockIcon} alt="Stock view"/></Link>
        <Link to='/'><img src={ExitIcon} alt="Log out"/></Link>
      </ul>
    </nav>
  )
}

export default NavChef;
