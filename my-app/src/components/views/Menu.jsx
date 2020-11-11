import React from 'react';
import Style from './menu.module.css';
import {Link} from 'react-router-dom';

const Menu = ()=>{
  return(
    <div className={`view-container ${Style.container}`}>
      <div className={`nav-container ${Style.nav}`}>
        <Link><img src="" alt=""/></Link>
        <nav className={`nav-box-container ${Style.navBox}`}>
          <ul>
            <Link to='/'><img src="https://firebasestorage.googleapis.com/v0/b/burguer-queen-88.appspot.com/o/resources%2Ficons%2Fmenu.png?alt=media&token=eb409603-0ec6-4b9d-bdb9-c95aa1b84264" alt="Menu view"/></Link>
            <Link to='/'><img src="https://firebasestorage.googleapis.com/v0/b/burguer-queen-88.appspot.com/o/resources%2Ficons%2Fkitchen.png?alt=media&token=a33076e5-ec5e-4580-a06e-4cf89eb4ca54" alt="Kitchen icon, state of order"/></Link>
            <Link to='/'><img src="https://firebasestorage.googleapis.com/v0/b/burguer-queen-88.appspot.com/o/resources%2Ficons%2Fstock.png?alt=media&token=9ddd0217-746b-4149-97a0-a8fbad80268b" alt="Stock view"/></Link>
            <Link to='/'><img src="https://firebasestorage.googleapis.com/v0/b/burguer-queen-88.appspot.com/o/resources%2Ficons%2Freceipt.png?alt=media&token=20c119d8-f6e6-4fab-b8a9-34886d164819" alt="Receipt view"/></Link>
          </ul>
        </nav>
      </div>
      <div className={`menu-container ${Style.menu}`}>
        <div className={`choose-container ${Style.choose}`}>

        </div>
        <div className={`order-container ${Style.order}`}>

        </div>
      </div>
    </div>
  )
}

export default Menu;
