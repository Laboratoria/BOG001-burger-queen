import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NewOrder from "./components/pages/NewOrder";
import OrderDeliver from "./components/pages/OrderDeliver";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nueva-orden" exact component={NewOrder} />
          <Route path="/ordenes-enviadas" exact component={OrderDeliver} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
