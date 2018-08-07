import React from 'react';

const ComboNav = ({ bw, style, children }) => {
  style = style || {}
  return (
  <div className="combonav" style={style}>
    <div className="nav">
      <div className="logo">
        { bw ? 
            <img src="assets/images/Group_8_BW.png" alt="logo" /> :
            <img src="assets/images/Group_8.png" alg="logo" /> }
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
)};

export default ComboNav;