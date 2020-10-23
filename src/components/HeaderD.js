import React from "react";
import { Link } from "react-router-dom";

// import "./HeaderD.css";
import logo from "../logo.png";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  //   //   resizeHeaderOnScroll() {
  //   //     const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  //   //       shrinkOn = 50,
  //   //       removeOn = 65,
  //   //       headerElement = document.getElementById("header");

  //   //     if (distanceY > shrinkOn) {
  //   //       headerElement.classList.add("smaller");
  //   //     } else {
  //   //       headerElement.classList.remove("smaller");
  //   //     }

  //   //     if (distanceY > removeOn) {
  //   //       headerElement.classList.add("disappear");
  //   //     } else {
  //   //       headerElement.classList.remove("disappear");
  //   //     }
  //   //   }

  render() {
    return (
      <div className="sticky-wrappers">
        <header id="masthead" className="site-header header--s1">
          <div className="container">
            <div className="site-branding">
              <Link to="/">
                <img
                  width="157"
                  height="50"
                  //   className="header__logo"
                  src={logo}
                  alt="Its time logo"
                />
              </Link>
            </div>
            {/* <nav id="site-navigation" className="main-navigation">
              <button
                class="menu-toggle"
                aria-controls="primary-menu"
                aria-expanded="false"
              >
                Primary Menu
              </button>
              <a href="#" class="navbar-toggle">
                <div class="burger-sidebar">
                  <span class="menu-icon-bar"></span>
                  <span class="menu-icon-bar"></span>
                  <span class="menu-icon-bar"></span>
                </div>
              </a>
              <ul
                id="menu-primary"
                className="menu edupro-max-megamenu mega-no-js sf-js-enabled"
                dataEvent="hover_intent"
                dataEffect="fade_up"
                dataEffectSpeed="200"
                dataEffectMobile="disabled"
                dataEffectSpeedMobile="0"
                dataMobileForceWidth="false"
                dataSecondClick="go"
                dataDocumentClick="collapse"
                dataVerticalBehaviour="standard"
                dataBreakpoint="768"
                dataUnbind="true"
                dataHoverIntentTimeout="300"
                dataHoverIntentInterval="100"
                style={{ touchAction: "pan-y" }}
              >
                <li
                  className="mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-current-menu-item mega-align-bottom-left mega-menu-flyout mega-menu-item-1951"
                  id="mega-menu-item-1951"
                >
                  <a class="mega-menu-link" href="/courses" tabindex="0">
                    Courses
                  </a>
                </li>
                <li
                  className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-2036"
                  id="mega-menu-item-2036"
                >
                  <a
                    className="mega-menu-link"
                    href="https://www.12minprep.com/knowledge-hub/"
                    tabindex="0"
                  >
                    Knowledge Hub
                  </a>
                </li>
                <li
                  className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-align-bottom-left mega-menu-flyout mega-menu-item-2013"
                  id="mega-menu-item-2013"
                >
                  <a
                    className="mega-menu-link"
                    href="https://www.12minprep.com/about/"
                    tabindex="0"
                  >
                    About
                  </a>
                </li>
                <li
                  className="mega-menu-item mega-menu-item-type-post_type mega-menu-item-object-page mega-current_page_parent mega-align-bottom-left mega-menu-flyout mega-menu-item-2010"
                  id="mega-menu-item-2010"
                >
                  <a
                    className="mega-menu-link"
                    href="https://www.12minprep.com/blog/"
                    tabindex="0"
                  >
                    Blog
                  </a>
                </li>
                <li
                  className="mega-uo-login-logout-menu-item mega-menu-item mega-menu-item-type-custom mega-menu-item-object-custom mega-align-bottom-left mega-menu-flyout mega-menu-item-2882 uo-login-logout-menu-item"
                  id="mega-menu-item-2882"
                >
                  <a
                    className="mega-menu-link"
                    href="https://www.12minprep.com/wp-login.php"
                    tabindex="0"
                  >
                    Log In
                  </a>
                </li>
              </ul>
            </nav> */}

            {/* <nav id="header" className="header">
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
            </nav> */}
          </div>
        </header>
      </div>
    );
  }
}

// class Header extends React.Component {
//   componentDidMount() {
//     window.addEventListener("scroll", this.resizeHeaderOnScroll);
//   }

// resizeHeaderOnScroll() {
//   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
//     shrinkOn = 50,
//     removeOn = 65,
//     headerElement = document.getElementById("header");

//   if (distanceY > shrinkOn) {
//     headerElement.classList.add("smaller");
//   } else {
//     headerElement.classList.remove("smaller");
//   }

//   if (distanceY > removeOn) {
//     headerElement.classList.add("disappear");
//   } else {
//     headerElement.classList.remove("disappear");
//   }
// }

//   render() {
//     return (
//       <header>
//           <div>
//         <nav id="header" className="header">
//           <Link to="/">
//             <img className="header__logo" src={logo} alt="Its time logo" />
//           </Link>

//           <div className="header__nav">
//             <Link to="/courses" className="header__option">
//               <span>COURSES</span>
//             </Link>

//             <Link to="/knowledge-hub" className="header__option">
//               <span>KNOWLEDGE HUB</span>
//             </Link>

//             <Link to="/about" className="header__option">
//               <span>ABOUT</span>
//             </Link>

//             <Link to="/blog" className="header__option">
//               <span>BLOG</span>
//             </Link>

//             <Link to="/login" className="header__option">
//               <span>LOG IN</span>
//             </Link>
//           </div>
//         </nav>
//       </header>
//     );
//   }
// }
export default Header;
