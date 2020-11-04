import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import NavBar from "../../common/nav/NavBar";
import Footer from "../../common/footer/Footer";
import { login } from "../../../redux/actions/auth";
import { validateEmail } from "../../../helpers/validators";
// import { isLoggedIn, message } from "../../../redux/selectors";

import "./SignUpPage.css";

const sucessLogin = process.env.REACT_APP_SUCCESS_LOGIN_REDIRECT;

function LoginPage({ history }) {
  const { register, handleSubmit, errors } = useForm();

  // #
  const [loading, setLoading] = useState(false);
  const [validUser, setValidUser] = useState(true);

  // #
  const { isLoggedIn } = useSelector((state) => state.authB);
  const { message } = useSelector((state) => state.message);

  // const isLoggedInSelector = isLoggedIn;
  // const messageSelector = message;

  // #
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    setLoading(true);
    const { email, password } = data;

    if (email && password) {
      dispatch(login(email, password))
        .then(() => {
          history.push(sucessLogin);
          window.location.reload();
        })
        .catch(() => {
          setValidUser(false);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to={sucessLogin} />;
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="loginform">
          <h3>Log In</h3>

          <div className="loginform__form">
            <form onSubmit={handleSubmit(handleLogin)}>
              {errors.email && errors.email.type === "required" && (
                <span role="alert" className="loginform__error">
                  email is required!
                </span>
              )}
              {errors.email && errors.email.type === "validate" && (
                <span role="alert" className="loginform__error">
                  enter a valid email!
                </span>
              )}
              {!validUser && (
                <span role="alert" className="loginform__error">
                  {message}
                </span>
              )}
              <p className="loginform__input">
                <input
                  id="email"
                  name="email"
                  type="email"
                  data-testid="email"
                  placeholder="Email"
                  ref={register({
                    required: true,
                    validate: validateEmail,
                  })}
                />
              </p>
              {errors.password && errors.password.type === "required" && (
                <span role="alert" className="loginform__error">
                  password is required!
                </span>
              )}
              <p className="loginform__input">
                <input
                  id="password"
                  name="password"
                  type="password"
                  data-testid="password"
                  placeholder="Password"
                  ref={register({
                    required: true,
                  })}
                />
              </p>
              <p className="loginform__submit">
                <button disabled={loading}>
                  <span>Log In</span>
                  {loading && <i className="c-inline-spinner"></i>}
                </button>
              </p>
              <Link to="#">
                <span>Forgot your password?</span>
              </Link>
              <div className="loginform__line">
                <div></div>
              </div>
              <div className="loginform__login">
                <p>
                  Not yet a member?{" "}
                  <Link to="/register">
                    <span>REGISTER NOW</span>
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
