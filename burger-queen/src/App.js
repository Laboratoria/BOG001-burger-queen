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
        <Route path="">
        <LoginView/>
        </Route>
        <Route path="/contacto">
          Esta es la pagina de contacto
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
