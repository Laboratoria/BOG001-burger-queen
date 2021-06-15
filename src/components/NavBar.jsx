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

const NavBar = () => {
  return (
    <div className="NavBar">
      <Router>
        <div>
          <button className="button">
            <Link to="/"><i className="fas fa-home"></i></Link>
          </button>
          <button className="button">
            <Link to="/askOrder"><i className="fas fa-clipboard-list"></i></Link>
          </button>
          <button className="button">
            <Link to="/cookOrder"><i className="fas fa-mitten"></i></Link>
          </button>
          <button className="button">
            <Link to="/deliverOrder"><i className="fas fa-hamburger"></i></Link>
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

export default NavBar