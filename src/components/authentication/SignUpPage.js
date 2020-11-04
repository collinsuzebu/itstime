import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signup } from "../../../redux/actions/auth";
import Footer from "../../common/footer/Footer";
import NavBar from "../../common/nav/NavBar";
import { validateEmail, validatePassword } from "../../../helpers/validators";

import "./SignUpPage.css";

export default function SignUpPage() {
  const { register, handleSubmit, errors } = useForm();
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordMisMatch, setpasswordMisMatch] = useState(false);

  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, password, password2, firstName, lastName } = data;
    setSuccessful(false);
    setLoading(true);

    if (password !== password2) {
      setpasswordMisMatch(true);
      setLoading(false);
    } else {
      dispatch(signup(email, password, password2, firstName, lastName))
        .then(() => {
          setSuccessful(true);
          setLoading(false);
        })
        .catch(() => {
          setSuccessful(false);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="loginform">
          <h3>Sign Up</h3>

          <div className="loginform__form">
            {message && (
              <span
                style={{ display: "block" }}
                className={
                  successful ? "loginform__success" : "loginform__error"
                }
              >
                {message}
              </span>
            )}
            {!successful && (
              <form onSubmit={handleSubmit(onSubmit)}>
                {errors.firstName && errors.firstName.type === "required" && (
                  <span className="loginform__error">
                    first name is required!
                  </span>
                )}
                {errors.firstName && errors.firstName.type === "minLength" && (
                  <span className="loginform__error">
                    min length of ( 2 ) is required!
                  </span>
                )}
                <p className="loginform__input">
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    ref={register({ required: true, minLength: 2 })}
                  />
                </p>

                {errors.lastName && errors.lastName.type === "required" && (
                  <span className="loginform__error">
                    last name is required!
                  </span>
                )}
                {errors.lastName && errors.lastName.type === "minLength" && (
                  <span className="loginform__error">
                    min length of ( 2 ) is required!
                  </span>
                )}
                <p className="loginform__input">
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                    ref={register({ required: true, minLength: 2 })}
                  />
                </p>

                {errors.email && errors.email.type === "required" && (
                  <span className="loginform__error">email is required!</span>
                )}
                {errors.email && errors.email.type === "validate" && (
                  <span className="loginform__error">
                    a valid email is required!
                  </span>
                )}
                <p className="loginform__input">
                  <input
                    name="email"
                    id="email"
                    placeholder="Email"
                    ref={register({ required: true, validate: validateEmail })}
                  />
                </p>

                {errors.password && errors.password.type === "required" && (
                  <span className="loginform__error">
                    password is required!
                  </span>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <span className="loginform__error">
                    password is too short
                  </span>
                )}
                {errors.password && errors.password.type === "validate" && (
                  <span className="loginform__error">
                    password must contain at least one of (uppercase, lowercase,
                    number, special characters)
                  </span>
                )}
                <p className="loginform__input">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    ref={register({
                      required: true,
                      minLength: 8,
                      validate: validatePassword,
                    })}
                  />
                </p>

                {passwordMisMatch && (
                  <span className="loginform__error">
                    password does not match!
                  </span>
                )}
                <p className="loginform__input">
                  <input
                    name="password2"
                    type="password"
                    placeholder="Confirm password"
                    ref={register({
                      required: true,
                      minLength: 8,
                      validate: validatePassword,
                    })}
                  />
                </p>

                <p className="loginform__submit">
                  <button disabled={loading}>
                    <span>Sign Up</span>
                    {loading && <i className="c-inline-spinner"></i>}
                  </button>
                </p>

                <div className="loginform__line">
                  <div></div>
                </div>

                <div className="loginform__login">
                  <p>
                    Already a member?{" "}
                    <Link to="/login">
                      <span>LOGIN</span>
                    </Link>{" "}
                  </p>
                </div>
              </form>
            )}
            {successful && (
              <div className="loginform__login">
                <p>
                  <Link to="/login">
                    <span>Login to you account</span>
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
