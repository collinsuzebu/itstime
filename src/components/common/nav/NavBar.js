import React from "react";

import styled from "styled-components";
import Burger from "./Burger";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  top: 0;
  min-height: 93px;
  border-bottom: 1px solid #dedede;
  display: flex;

  font-style: normal;
  text-transform: uppercase;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif !important;

  .header {
    width: 100%;
    // position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: height 0.35s;
    // padding: 10px auto;
    margin: 0 70px;
  }

  .header__logo img {
    width: 155px;
    height="50";
    object-fit: contain;
    transition: all 0.3s;
  }
  .header__nav {
    margin-right: 0;
    margin-top: 20px;
    // display: flex;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              alt="Its time logo"
            />
          </Link>
        </div>

        <div className="header__nav">
          <Burger />
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
