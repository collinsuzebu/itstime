import React from "react";
import { Link } from "react-router-dom";
import Footer from "./common/footer/Footer";
import NavBar from "./common/nav/NavBar";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <>
      <NavBar />
      <main className="container">
        <section className="error404">
          <div className="error404__center">
            <img
              className="error404__image"
              src={process.env.PUBLIC_URL + "/images/error404.png"}
              alt="page not found"
            />
            <h1 className="error404__title">
              Sorry, we can't find the page you are looking for. Please go to{" "}
              {""}
              <Link to="/">home</Link>
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PageNotFound;
