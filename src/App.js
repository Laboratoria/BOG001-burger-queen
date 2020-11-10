import './App.css';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
//import { Component } from 'react';
import {OpcionesMenu} from './pages/opcionesMenu';
import {PrincipalCocina} from './pages/principalCocina';
import {PrincipalDesayuno} from './pages/principalDesayunos';
import {PrincipalMesero} from './pages/principalMesero';
import NotFound from './pages/notFound'

function App() {
  return (
    <BrowserRouter>
   <Switch>
     <Router extract path='/meseros' component={PrincipalMesero}/>
     <Router extract path='/opciones' component={OpcionesMenu}/>
     <Router extract path='/desayunos' component={PrincipalDesayuno}/>
     <Router extract path='/cocina' component={PrincipalCocina}/>
     <Router component= { NotFound }/>
   </Switch>
    </BrowserRouter>
  );
}

export default App;
