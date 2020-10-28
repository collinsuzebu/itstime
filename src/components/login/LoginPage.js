import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../common/footer/Footer";
import NavBar from "../common/nav/NavBar";
import "./SignUpPage.css";

export default function SignUpPage() {
  const { register, handleSubmit, errors } = useForm();
  const [isValidUser, setIsValidUser] = useState(false);

  const onSubmit = (data) => {
    const isvalid = serverValidation(data);
    setIsValidUser(isvalid);

    console.log(data);
  };

  const serverValidation = (data) => {
    return false;
  };

  const validateCredentials = () => {
    return isValidUser;
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="loginform">
          <h3>Log In</h3>

          <div className="loginform__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.email && errors.email.type === "required" && (
                <span className="loginform__error">email is required!</span>
              )}
              {!isValidUser &&
                errors.email &&
                errors.email.type === "validate" && (
                  <span className="loginform__error">
                    Your email and password does not match!
                  </span>
                )}
              <p className="loginform__input">
                <input
                  name="email"
                  id="email"
                  placeholder="Email"
                  ref={register({
                    required: true,
                    validate: validateCredentials,
                  })}
                />
              </p>
              {errors.password && errors.password.type === "required" && (
                <span className="loginform__error">password is required!</span>
              )}
              <p className="loginform__input">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  ref={register({
                    required: true,
                    validate: validateCredentials,
                  })}
                />
              </p>
              <p className="loginform__submit">
                <input type="submit" value="Log In" />
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
