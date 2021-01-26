import React from 'react';
import Style from './menu.module.css';
import Clock from '../organisms/Clock';
import ProfileBox from '../organisms/ProfileBox';
import NavWaiter from '../organisms/NavWaiter';
import LogoBox from '../molecules/Logo';
import OrderStatusTabs from '../organisms/OrderStatusTabs';
import ToPrepareList from '../organisms/ToPrepareList';
import PreparingList from '../organisms/PreparingList';
import ToDeliverList from '../organisms/ToDeliverList';

 // Buscar elevación del estado
 const dataOrder = [
  {
  id: 1,
  name: 'To Prepare',
  content: () => <ToPrepareList />,
  state: 'active'
  },

  {
  id: 2,
  name: 'Preparing',
  content: () => <PreparingList />,
  state: 'inactive'
  },
  {
    id: 3,
    name: 'To deliver',
    content: () => <ToDeliverList />,
    state: 'inactive'
    },
];
const ReportOfOrderStatus = (props)=>{

  return(
    <div className={`${Style.container}`}>
      <div className={`${Style.nav}`}>
        <LogoBox />
        <ProfileBox />
        <NavWaiter />
        <Clock />
      </div>
      <div className={`${Style.menu}`}>
        <OrderStatusTabs data={dataOrder}/>
      </div>
    </div>
  )
}

export default ReportOfOrderStatus;
