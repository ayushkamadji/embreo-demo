import React, { Component } from 'react';
import ComboNav from "./ComboNav";
import Footer from "./Footer";
import "../style/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <ComboNav 
          style={{ background: "linear-gradient(#DBD8D2FF, #DBD8D200)"}}>
          <ContactHeader />
        </ComboNav>
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

const ContactHeader = () => (
  <div className="contact-header">
    <div className="greeting">SAY HELLO!</div>
    <div className="instruction">
      <div className="text">
        Send us a message
      </div>
      <div className="decor">
        <div className="top"></div>
      </div>
     </div>
  </div>
);

const ContactForm = () => (
  <div className="form">
    <div className="field">
      <label htmlFor="name">Name</label>
      <input type="text" name="name"/>
    </div>
    <div className="field">
      <label htmlFor="email">Email Address</label>
      <input type="text" name="email"/>
    </div>
    <div className="field">
      <label htmlFor="subject">Subject</label>
      <input type="text" name="subject"/>
    </div>
    <div className="multi-line-field">
      <label htmlFor="message">Message</label>
      <div contentEditable className="multi-line" name="message">
      </div>
    </div>
    <button className="submit-button">SEND MESSAGE</button>
  </div>
)

export default Contact;
