//Aquí iran las tabs https://www.youtube.com/watch?v=sYaV1jiykPk&ab_channel=AmitavRoy

import React from 'react';
import {Link} from 'react-router-dom';
import BreakfastOptions from '../organisms/BreakfastOptions'
import LunchMealOptions from '../organisms/LunchMealOptions'
import MenuTabs from '../organisms/MenuTabs'


// Buscar elevación del estado
const dataMenu = [
  {
  id: 1,
  name: 'Breakfast',
  content: () => <BreakfastOptions />,
  state: 'active'
  },

  {
  id: 2,
  name: 'Lunch & Meal',
  content: () => <LunchMealOptions />,
  state: 'inactive'
  },
];

const ChooseFood = (props)=>{
  return(
    <div>
      <MenuTabs data= {dataMenu}/>
      <Link to='/'><img src='' alt=''/></Link>
    </div>
  )
}

export default ChooseFood;
