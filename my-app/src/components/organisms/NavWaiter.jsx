import React from 'react';
import {Link} from 'react-router-dom';
import Style from './navbox.module.css';
import MenuIcon from '../atoms/assets/menu.png';
import KitchenIcon from '../atoms/assets/kitchen.png';
import StockIcon from '../atoms/assets/stock.png';
import ReceiptIcon from '../atoms/assets/receipt.png';
import ExitIcon from '../atoms/assets/exit.png';

const NavWaiter = ()=>{
  return(
    <nav className={`${Style.navBox}`}>
      <ul>
        <Link to='/Menu'><img src={MenuIcon} alt="Menu view"/></Link>
        <Link to='/ReportOfOrderStatus'><img src={KitchenIcon} alt="Kitchen icon, state of order"/></Link>
        <Link to='/'><img src={StockIcon} alt="Stock view"/></Link>
        <Link to='/'><img src={ReceiptIcon} alt="Receipt view"/></Link>
        <Link to='/'><img src={ExitIcon} alt="Receipt view"/></Link>
      </ul>
    </nav>
  )
}

export default NavWaiter;
