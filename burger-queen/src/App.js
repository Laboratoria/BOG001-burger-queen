import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginView from './Vistas/Login.jsx';
import './Styles/sass/login.scss';

function App() {
  return (
    <Router>
      <Switch>{/* Se carga el contenido dinamico */}
        <Route  path=""  component={LoginView}>
        </Route>
        <Route exact path="/contacto"  component={}>
          
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
