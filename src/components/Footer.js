import React, { Component } from 'react';

const Footer = () => (
  <div className="footer">
    <div className="emblem">
      <img src="/assets/images/Group_17.png" alt=""/>
      <div className="credit">
        {'\u00A9'} 2018 Embreo Co.
      </div>
    </div>
    <div className="info-nav-group">
      <div className="info">
        <div className="title">LOCATION</div>
        <p>33 Ubi Avenue 3 #08-13</p>
        <p>Vertex, Singapore 408868</p>
      </div>
      <div className="info">
        <div className="title">CONTACT</div>
        <p>+65 9125 6736</p>
        <p>kit@embreo.co</p>
      </div>
      <div className="nav">
        <div className="title">SOCIAL</div>
        <div className="nav-item">Facebook</div>
        <div className="nav-item">Instagram</div>
      </div>
    </div>
  </div>
);

export default Footer;