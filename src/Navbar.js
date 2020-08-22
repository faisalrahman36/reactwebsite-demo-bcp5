import React, { Component } from "react";
//import logo from "./logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";
 

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <h2 className="logo"
            
            onClick={this.scrollToTop}
          > Astro <i>NewsAndReviews</i> </h2>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="reviews"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Reviews
              </Link>
            </li>


            <li className="nav-item">
              <Link
                activeClass="active"
                to="news"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}
