import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import NewOrder from './components/pages/NewOrder';
import OrderDeliver from './components/pages/OrderDeliver';
import OrderChef from './components/pages/OrderChef';
import DeliverChef from './components/pages/DeliverChef';

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nueva-orden" exact component={NewOrder} />
          <Route path="/ordenes-enviadas" exact component={OrderDeliver} />
          <Route path="/pedidos" exact component={OrderChef} />
          <Route path="/pedidos-terminados" exact component={DeliverChef} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
