import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from '../components/views/Home';
import LogInForm from '../components/templates/LogInForm';
import UserProfile from '../components/views/UserProfile';
import Menu from '../components/views/Menu';
import ToPrepare from '../components/views/ToPrepare';
import ReportOfOrderStatus from '../components/views/ReportOfOrderStatus';
import StockBoard from '../components/views/StockBoard';
// import SignUp from '../views/SignUp';
// import Error404 from '../views/Error404';

const Router = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/LogIn'>
            <LogInForm windowchoose='Register' hash='/Login'/>
          </Route>
          <Route exact path='/UserProfile' component={UserProfile}/>
          <Route exact path='/Menu' component={Menu}/>
          <Route exact path='/ToPrepare' component={ToPrepare}/>
          <Route exact path='/ReportOfOrderStatus' component={ReportOfOrderStatus}/>
          <Route exact path='/StockBoard' component={StockBoard}/>
        </Switch>
      </BrowserRouter>
    )
}
export default Router
