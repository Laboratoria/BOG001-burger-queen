import React from 'react';
import MainPage from './MainPage';
import AskOrder from './AskOrder';
import CookOrder from './CookOrder';
import DeliverOrder from './DeliverOrder';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

const Cover = () => {
  return (
    <div className="cover">
      <Router>
        <div>
          <button className="button">
            <Link to="/">Inicio</Link>
          </button>
          <button className="button">
            <Link to="/askOrder">Tomar orden</Link>
          </button>
          <button className="button">
            <Link to="/cookOrder">Ver cocina</Link>
          </button>
          <button className="button">
            <Link to="/deliverOrder">Servir orden</Link>
          </button>

          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/askOrder">
              <AskOrder />
            </Route>
            <Route path="/cookOrder">
              <CookOrder />
            </Route>
            <Route path="/deliverOrder">
              <DeliverOrder />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Cover