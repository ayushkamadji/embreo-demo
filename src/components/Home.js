import React, { Component } from 'react';

class Home extends Component {
  state = {  }
  render() {
    return (
      <div>
        <ComboNav></ComboNav>
      </div>
    );
  }
}

const ComboNav = () => (
  <div className="combonav">
    <div className="nav">
      <div className="logo">
        <img src="assets/images/Group_8.png" alt="logo"/>
      </div>
      <div className="menu-group">
        <div className="menu">Studio</div>
        <div className="menu">Work</div>
        <div className="menu">Contact</div>
      </div>
    </div>
    <div className="header"></div>
  </div>
)

export default Home;