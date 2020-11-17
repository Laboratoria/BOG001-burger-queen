import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <h1>Hola mundo React</h1>
      </div>
      <hr />
      <Switch>{/* Se carga el contenido dinamico */}
        <Route path="/contacto">
          Esta es la pagina de contacto
        </Route>
        <Route path="/contacto">
          Esta es la pagina de contacto
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
