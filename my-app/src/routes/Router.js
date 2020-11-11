import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from '../components/views/Home';
import LogInForm from '../components/templates/LogInForm';
import Menu from '../components/views/Menu';
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
          <Route exact path='/Menu' component={Menu}/>
        </Switch>
      </BrowserRouter>
    )
}
export default Router
