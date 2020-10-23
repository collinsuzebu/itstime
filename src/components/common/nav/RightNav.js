import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .header__option {
    text-decoration: none;
    display: inline-block;
    list-style-type: none;
    padding: 15px 25px;
    font-weight: 600;
    font-size: 1.1em;
    -webkit-transition: 0.07s 0.07s;
    transition: 0.07s 0.07s;
    color: #212121;
    font-weight: 600;

    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .header__option:hover {
    color: #7cb342;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background-color: #040a0c;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 370px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #616161;
      padding: 0;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
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
    </Ul>
  );
};

export default RightNav;
