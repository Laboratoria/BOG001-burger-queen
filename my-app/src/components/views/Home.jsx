import React from 'react';
import Style from './home.module.css';
import {Link} from 'react-router-dom';

const Home = ()=>{
  return(
    <div className={`home-container ${Style.container}`}>
        <p className={`home-quote ${Style.quote}`}>Fresh, bold, tasty.</p>
        <div className={`home-box-btn ${Style.boxbtn}`}>
          <Link to='/LogIn'><button className={`home-btn ${Style.btn}`}>Let's work</button></Link>
        </div>
    </div>
  )
}

export default Home;


// <div className={`home-boxbtn ${Style.boxbtn}`}>
