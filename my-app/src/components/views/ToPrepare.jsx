import React from 'react';
import Style from './menu.module.css';
import {Link} from 'react-router-dom';
import Clock from '../organisms/Clock';
import ProfileBox from '../organisms/ProfileBox';
import NavChef from '../organisms/NavChef';

const ToPrepare = ()=>{
  return(
    <div className={`${Style.container}`}>
      <div className={`${Style.nav}`}>
      <Link to='/'><img src='' alt=''/></Link>
        <ProfileBox />
        <NavChef />
        <Clock />
      </div>
      <div className={`${Style.menu}`}>
        <div className={`${Style.choose}`}>
          <h2>Orders are comiiing!</h2>
        </div>
        <div className={`${Style.order}`}>
        </div>
      </div>
    </div>
  )
}

export default ToPrepare;
