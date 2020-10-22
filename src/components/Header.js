import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../logo.png";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 50,
      removeOn = 65,
      headerElement = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerElement.classList.add("smaller");
    } else {
      headerElement.classList.remove("smaller");
    }

    if (distanceY > removeOn) {
      headerElement.classList.add("disappear");
    } else {
      headerElement.classList.remove("disappear");
    }
  }

  render() {
    return (
      <header>
        <nav id="header" className="header">
          <Link to="/">
            <img className="header__logo" src={logo} alt="Its time logo" />
          </Link>

          <div className="header__nav">
            <Link to="/courses" className="header__option">
              <span>COURSES</span>
            </Link>

            <Link to="/knowledge-hub" className="header__option">
              <span>KNOWLEDGE HUB</span>
            </Link>

            <Link to="/about" className="header__option">
              <span>ABOUT</span>
            </Link>

            <Link to="/blog" className="header__option">
              <span>BLOG</span>
            </Link>

            <Link to="/login" className="header__option">
              <span>LOG IN</span>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
