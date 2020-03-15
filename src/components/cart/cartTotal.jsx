import React, { Component } from "react";
import { Link } from "react-router-dom";

const cartTotal = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, handleClearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => {
                  handleClearCart();
                }}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal : </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax (10%) : </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">totall : </span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default cartTotal;
