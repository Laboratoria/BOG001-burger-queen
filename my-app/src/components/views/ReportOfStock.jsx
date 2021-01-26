import React from 'react';
import Style from './menu.module.css';
import NavWaiter from '../organisms/NavWaiter';
import Clock from '../organisms/Clock';
import ProfileBox from '../organisms/ProfileBox';
import LogoBox from '../molecules/Logo';

const ReportOfStock = () =>{
  return(
    <div className={`${Style.container}`}>
      <div className={`${Style.nav}`}>
        <LogoBox />
        <ProfileBox />
        <NavWaiter />
        <Clock />
      </div>
      <div className={`${Style.menu}`}>
      </div>
    </div>
  )
}

export default ReportOfStock;
