import React, { useState } from 'react';
import Style from './menu.module.css';
import {Link} from 'react-router-dom';
import NavChef from '../organisms/NavChef';
import Clock from '../organisms/Clock';
import ProfileBox from '../organisms/ProfileBox';
import FormFoodStock from '../templates/FormFoodStock';
import StockReport from '../templates/StockReport';
import firebase from 'firebase/app';
import 'firebase/firestore';

const StockBoard = ()=>{

  const menuStock = [
    { name: 'Hamburguesa', quantity: 8, price: '$10 USD'},
    { name: 'Jugo', quantity: 3, price: '$7 USD'},
    { name: 'Cafe', quantity: 5, price: '$10 USD'},
  ]

  const [stockItems, setStockItems] = useState(menuStock);

  //Add Items selected

  const addStock = (stockData) => {
    setStockItems([
      ...stockItems,
      stockData
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
        <FormFoodStock addStock={addStock}/>
        <StockReport stockItems={stockItems} />
      </div>
    </div>
  )
}

export default StockBoard;
