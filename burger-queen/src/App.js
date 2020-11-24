import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginView from './Vistas/Login.jsx';
import BackgroundRoles from './Vistas/Roles.jsx';
import './Styles/sass/login.scss';
import './Styles/sass/roles.scss';
import './Styles/sass/footer.scss';

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

        </Route>
        <Route path="/cocina" exact>

        </Route>
      </Switch>
    </Router>
  );
}
export default App;
