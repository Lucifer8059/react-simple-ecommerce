import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer, NavWrapper } from "./button";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/">
          <span className="navbar-brand">Home</span>
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                <span>Products</span>
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus"> </i>
              </span>
              MyCart
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

export default NavBar;
