import React, { Component } from 'react';
import Home from "./components/Home";
import Work from "./components/Work";
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Work />
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
