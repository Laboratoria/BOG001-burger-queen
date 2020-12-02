import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import { Component } from 'react';
import OpcionesMenu from "./pages/opcionesMenu";
import PrincipalCocina from "./pages/principalCocina";
import PrincipalDesayuno from "./pages/principalDesayunos";
import PrincipalMesero from "./pages/principalMesero";
//import NotFound from "./pages/notFound";
import Home from "./pages/home";

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/meseros" component={PrincipalMesero} />
        <Route exact path="/opciones" component={OpcionesMenu} />
        <Route exact path="/desayunos"component={PrincipalDesayuno} />
        <Route exact path="/cocina" component={PrincipalCocina} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
