import React from 'react';
import {Link} from 'react-router-dom';
import LogoImg from '../atoms/assets/logo-bq.png';
import Style from './logobox.module.css';


const LogoBox = () => {
  return(
    <div className={`${Style.logoBox}`}>
      <Link to='/Menu'>
        <img className={`${Style.logoImg}`} src={LogoImg} alt="Menu view"/>
      </Link>
    </div>
  )
}

export default LogoBox;
