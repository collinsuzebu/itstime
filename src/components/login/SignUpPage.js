import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../common/footer/Footer";
import NavBar from "../common/nav/NavBar";
import "./SignUpPage.css";

export default function SignUpPage() {
  const { register, handleSubmit, errors } = useForm();
  const [passwordMisMatch, setpasswordMisMatch] = useState(false);

  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      setpasswordMisMatch(true);
    } else {
      console.log(data);
    }
  };

  const validatePassword = (password) => {
    let reg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    if (reg.test(password) === true) return true;
    return false;
  };

  const validateEmail = (email) => {
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (reg.test(email) === true) return true;
    return false;
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="loginform">
          <h3>Sign Up</h3>

          <div className="loginform__form">
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
                <span className="loginform__error">last name is required!</span>
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
                <span className="loginform__error">password is required!</span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="loginform__error">password is too short</span>
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

              {errors.password && passwordMisMatch && (
                <span className="loginform__error">
                  password is does not match!
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
                <input type="submit" value="Sign Up" />
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
