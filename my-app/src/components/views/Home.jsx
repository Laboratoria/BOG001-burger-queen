import React from 'react';
import Style from './home.module.css';
import {Link} from 'react-router-dom';

const Home = ()=>{
  return(
    <div className={`${Style.container}`}>
      <p className={`${Style.quote}`}>Fresh, bold, tasty.</p>
      <div className={`${Style.boxbtn}`}>
        <img className={`${Style.burger}`} src="https://firebasestorage.googleapis.com/v0/b/burguer-queen-88.appspot.com/o/resources%2Ffull-burger.png?alt=media&token=7099c740-25da-40af-af0a-37e6eb31fccd" alt="Delicious burger with a crown"/>
        <Link to='/LogIn' className={`${Style.linkMob}`}><img src="https://firebasestorage.googleapis.com/v0/b/burguer-queen-88.appspot.com/o/resources%2Ficons%2Frow-home.png?alt=media&token=56102633-e115-41c0-8bbf-9f60aa12e668" alt="Let´s work button"/></Link>
        <Link to='/LogIn' className={`${Style.linkBig}`}><button className={`home-btn ${Style.btn}`}>Let's work</button></Link>
      </div>
    </div>
  )
}

export default Home;
