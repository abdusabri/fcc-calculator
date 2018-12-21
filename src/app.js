import React, { Component } from "react";
import "./app.css";
import Calculator from "./components/calculator";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    );
  }
}

export default App;
