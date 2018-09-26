import React, { Component } from "react";
import ShoppingList from "./components/ShoppingList";
import "./App.css";
import ItemModal from "./components/ItemModal";

class App extends Component {
  render() {
    return (
      <div className="container">
        <ItemModal />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
