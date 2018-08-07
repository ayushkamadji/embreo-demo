import React from 'react';

const ComboNav = ({ children }) => (
  <div className="combonav">
    <div className="nav">
      <div className="logo">
        <img src="assets/images/Group_8.png" alt="logo" />
      </div>
      <div className="menu-group">
        <div className="menu">Studio</div>
        <div className="menu">Work</div>
        <div className="menu">Contact</div>
      </div>
    </div>
    <div className="header">
      {children}
    </div>
  </div>
)

export default ComboNav;