import React, { Component } from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: true };

  clickHandler = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav>
        <div className="logo">
          <h3>Bharat-Yatra</h3>
        </div>
        <div className="menu-bar" onClick={this.clickHandler}>
          <i
            id="bar"
            className={
              this.state.clicked
                ? "fa-solid fa-bars"
                : "fa-regular fa-circle-xmark"
            }
          ></i>
        </div>
        <div className={this.state.clicked ? "nav menu" : "nav menu active"}>
          <div className="menu-links">
            <Link to="/">
              <i className="fa-solid fa-house-user"></i>Home
            </Link>
            <Link to="/about">
              <i className="fa-solid fa-circle-info"></i>About
            </Link>
            <Link to="/service">
              <i className="fa-solid fa-briefcase"></i>Service
            </Link>
            <Link to="/contact">
              <i className="fa-solid fa-address-book"></i>Contact us
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
