import React from 'react';
import Style from './LogInForm.module.css';
import {Link} from 'react-router-dom';


const LogIn = ()=>{
  return(
    <div className={`logIn-container ${Style.container}`}>
        <div >
          <Link to='/'><button className={`logIn-btn-active ${Style.btnActive}`}>Home</button></Link>
        </div>
    </div>
  )
}

export default LogIn;
