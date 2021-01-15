import React from 'react';
import Style from './menu.module.css';
import {Link} from 'react-router-dom';
import Clock from '../organisms/Clock';
import ProfileBox from '../organisms/ProfileBox';
import NavWaiter from '../organisms/NavWaiter';

const ReportOfOrderStatus = ()=>{
  return(
    <div className={`${Style.container}`}>
      <div className={`${Style.nav}`}>
      <Link to='/'><img src='' alt=''/></Link>
        <ProfileBox />
        <NavWaiter />
        <Clock />
      </div>
      <div className={`${Style.menu}`}>
        <div className={`${Style.choose}`}>
          <h2>Order status data</h2>
        </div>
        <div className={`${Style.order}`}>
        </div>
      </div>
    </div>
  )
}

export default ReportOfOrderStatus;
