import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            HOME PAGE
            <Body />
          </Route>

          <Route path="courses"></Route>

          <Route path="knowledge-hub"></Route>

          <Route path="about"></Route>

          <Route path="blog"></Route>

          <Route path="login"></Route>

          <Route></Route>

          {/* <Header />
        Its Time */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
