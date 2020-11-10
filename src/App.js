import './App.css';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
//import { Component } from 'react';
import {OpcionesMenu} from './pages/opcionesMenu';
import {PrincipalCocina} from './pages/principalCocina';
import {PrincipalDesayuno} from './pages/principalDesayunos';
import {PrincipalMesero} from './pages/principalMesero';

function App() {
  return (
    <BrowserRouter>
   <Switch>
     <Router extract path='/meseros' component={PrincipalMesero}/>
     <Router extract path='/opciones' component={OpcionesMenu}/>
     <Router extract path='/desayunos' component={PrincipalDesayuno}/>
     <Router extract path='/cocina' component={PrincipalCocina}/>
   </Switch>
    </BrowserRouter>
  );
}

export default App;
