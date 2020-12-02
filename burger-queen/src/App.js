import React from 'react';
import {
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from './Vistas/Login.jsx';
import BackgroundRoles from './Vistas/Roles.jsx';
import BackgroundKitchen from './Vistas/Kitchen'
import BackgroundWaiters from './Vistas/Waiters.jsx';
import './Styles/sass/login.scss';
import './Styles/sass/roles.scss';
import './Styles/sass/footer.scss';
import './Styles/sass/navigation.scss';
import './Styles/sass/kitchen.scss';
import './Styles/sass/waiters.scss' 


function App() {
  return (
    <Router>
      <Switch>{/* Se carga el contenido dinamico */}
        <Route  path="/" exact>
          <LoginView />
        </Route>
        <Route path="/roles">
          <BackgroundRoles />
        </Route>
        <Route path="/mesa" exact>
        <BackgroundWaiters/>
        </Route>
        <Route path="/cocina" exact>
        <BackgroundKitchen/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
