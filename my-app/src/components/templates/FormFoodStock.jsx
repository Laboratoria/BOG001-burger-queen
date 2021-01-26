//Aquí iran las tabs https://www.youtube.com/watch?v=sYaV1jiykPk&ab_channel=AmitavRoy

import React from 'react';
import {Link} from 'react-router-dom';
import BreakfastStock from '../organisms/BreakfastStock'
import LunchMealStock from '../organisms/LunchMealStock'
import MenuTabs from '../organisms/MenuTabs'

const dataMenu = [

  {
  id: 1,
  name: 'Breakfast',
  content: () => <BreakfastStock />,
  state: 'active'
  },

  {
  id: 2,
  name: 'Lunch & Meal',
  content: () => <LunchMealStock />,
  state: 'inactive'
  },
];

const FormFoodStock = (props)=>{
  return(
    <div>
      <MenuTabs data= {dataMenu}/>
      <Link to='/'><img src='' alt=''/></Link>
    </div>
  )
}

export default FormFoodStock;
