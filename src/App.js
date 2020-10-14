import React from 'react';
import './App.scss';
import  Navbar  from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NuevaOrden from './components/pages/NuevaOrden';
import OrdenesEnviadas from './components/pages/OrdenesEnviadas';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route path ='/' exact component={Home}/>
      <Route path ='/nueva-orden' exact component={NuevaOrden}/>
      <Route path ='/ordenes-enviadas' exact component={OrdenesEnviadas}/>
      </Switch>
    </Router>


   </>
  );
}

export default App;
