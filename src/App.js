import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import Courses from "./components/courses/Courses";
import PageNotFound from "./components/PageNotFound";
import CourseManagement from "./components/courses/CourseManagement"; // eslint-disable-line import/no-named-as-default

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/courses" component={Courses} />

          <Route path="/course/:slug" component={CourseManagement} />

          <Route path="/course" component={CourseManagement} />

          <Route path="/knowledge-hub" component={PageNotFound}></Route>

          <Route path="/about" component={PageNotFound}></Route>

          <Route path="/blog" component={PageNotFound}></Route>

          <Route path="/login" component={PageNotFound}></Route>

          <Route component={PageNotFound}></Route>

          {/* <Header />
        Its Time */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
