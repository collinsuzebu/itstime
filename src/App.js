import React, { useEffect } from "react";
import { history } from "./helpers/history";
import { useDispatch } from "react-redux";
import { clearMessage } from "./redux/actions/message";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import CourseDetail from "./components/courses/CourseDetail";
import MCourses from "./components/courses/MCourses";
import Blog from "./components/blog/Blog";
import PageNotFound from "./components/PageNotFound";
//import CourseManagement from "./components/courses/CourseManagement"; // eslint-disable-line import/no-named-as-default
import SignUpPage from "./components/authentication/SignUpPage";
import LoginPage from "./components/authentication/LoginPage";
import ProfilePage from "./components/students/ProfilePage";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          {/* <Route path="/course/:slug" component={CourseManagement} /> */}

          <Route path="/courses/:slug" component={CourseDetail} />

          <Route path="/courses" component={MCourses} />

          <Route path="/knowledge-hub" component={PageNotFound}></Route>

          <Route path="/about" component={PageNotFound}></Route>

          <Route path="/blog" component={Blog}></Route>

          <Route path="/register" component={SignUpPage}></Route>

          <Route path="/login" component={LoginPage}></Route>

          {/* <PrivateRoute path="/profile" component={ProfilePage} /> */}

          <Route path="/profile" component={ProfilePage} />

          <Route component={PageNotFound}></Route>

          {/* <Header />
        Its Time */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
