import React, { Component } from "react";
import { Provide } from "react-redux";
import store from "./store";

import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provide store={store}>
        <div className="App ">
          <AppNavbar />
          <ShoppingList />
        </div>
      </Provide>
    );
  }
}

export default App;
