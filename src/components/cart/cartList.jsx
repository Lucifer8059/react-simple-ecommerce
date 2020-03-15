import React, { Component } from "react";
import Cartitem from "./cartItem";

const CartList = ({ value }) => {
  const { cart } = value;

  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <Cartitem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
};

export default CartList;
