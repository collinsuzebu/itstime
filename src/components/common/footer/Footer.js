import React from "react";
import logo from "../../../images/logo-white.png";
import "./Footer.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer-secondary">
        <div className="container">
          <div className="row">
            <div className="column col-md-3 footer-1">
              <div className="widgets">
                <div className="widget widget__contact-info">
                  <div className="footer__logo">
                    <img src={logo} alt="itstime logo" />
                  </div>
                  <p className="intro">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident,
                  </p>
                </div>
              </div>
            </div>
            <div className="column col-md-3 footer-2">
              <div className="widgets">
                <div className="widget widget__nav_menu">
                  <h3 className="widget__title">DEVELOPER</h3>
                  <div>
                    <ul className="footer__menu">
                      <li className="footer__menu-item">
                        <a href="/">About</a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="/">Contact</a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="/">Privacy</a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="/">FAQ</a>
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="column col-md-3 footer-3">
              <div className="widgets">
                <div className="widget widget__nav_menu">
                  <h3 className="widget__title">POPULAR LINKS</h3>
                  <div>
                    <ul className="footer__menu">
                      <li className="footer__menu-item">
                        <a href="/">Free Course</a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="/">Knowledge Hub</a>
                      </li>
                      <li className="footer__menu-item">
                        <a href="/">Awesome Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="column col-md-3 footer-4">
              <div className="widgets">
                <div className="widget_text widget widget_custom_html">
                  <div className="textwidget custom-html-widget">
                    <div className="ssl">
                      <i className="fa fa-lock"></i>{" "}
                      <span className="ssl-text">
                        <b>Secure </b>Payment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-primary">
        <div className="container">
          <div className="col-md-6">
            <div className="site-info">
              Copyright © 2020. All Rights Reserved to{" "}
              <a href="https://github.com/collinsuzebu">
                <b>itstime</b>
              </a>{" "}
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
