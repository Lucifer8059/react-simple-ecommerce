import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navbar";
import ProductList from "./components/productList";
import Details from "./components/details";
import Cart from "./components/cart";
import Default from "./components/default";
import Modal from "./components/modal";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
