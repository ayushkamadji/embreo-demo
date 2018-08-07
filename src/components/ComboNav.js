import React from 'react';
import { Link } from "react-router-dom";

const ComboNav = ({ bw, style, children }) => {
  style = style || {}
  return (
  <div className="combonav" style={style}>
    <div className="nav">
      <div className="logo">
        <Link to="/">
        { bw ? 
            <img src="assets/images/Group_8_BW.png" alt="logo" /> :
            <img src="assets/images/Group_8.png" alg="logo" /> }
        </Link>
      </div>
      <div className="menu-group">
        <div className="menu">
          <Link to="#">Studio</Link>
        </div>
        <div className="menu">
          <Link to="/work">Work</Link>
        </div>
        <div className="menu">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
    <div className="header">
      {children}
    </div>
  </div>
)};

export default ComboNav;