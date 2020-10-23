import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import Courses from "./components/courses/Courses";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/courses" component={Courses} />

          <Route path="/knowledge-hub"></Route>

          <Route path="/about"></Route>

          <Route path="/blog"></Route>

          <Route path="/login"></Route>

          <Route component={PageNotFound}></Route>

          {/* <Header />
        Its Time */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
