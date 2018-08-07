import React, { Component } from 'react';
import Home from "./components/Home";
import Work from "./components/Work";
import GoldMax from "./components/GoldMax";
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Work /> */}
        {/* <Home /> */}
        <GoldMax />
      </div>
    );
  }
}

export default App;
