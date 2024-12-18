import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
      </div>
    );
  }
}

export default App;
