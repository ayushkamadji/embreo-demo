import React, { Component } from 'react';
import NukaCarousel from "nuka-carousel";
import ComboNav from "./ComboNav";
import Footer from "./Footer";
import "../style/Home.css";

class Home extends Component {
  state = {}
  render() {
    return (
      <div className="home">
        <ComboNav>
          <HomeHeader />
        </ComboNav>
        <div className="flare">
          <img src="assets/images/Group_11.png" alt=""/>
        </div>
        <Carousel />
        <About />
        <Services />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

const HomeHeader = () => (
  <div className="home-header">
    <div className="title">WE CONVERT IDEAS INTO PRODUCTS AND PRODUCTS INTO BUSINESSES</div>
    <div className="content">We are a digital studio that works in the intersection of design, technology & human interaction</div>
  </div>
);

const Carousel = () => (
  <div className="carousel">
    <NukaCarousel 
      cellSpacing={0} 
      frameOverflow="hidden" 
      slideWidth={0.765} 
      wrapAround>
      <div className="slide-container">
        <div className="info-box">
          <div className="title">EVRYWR</div>
          <div className="content">Introducing the world's most beautifully designed GPS tracker through e-commerce</div>
          <div className="more">
            <i className="ri-chevron-right-circle"></i>
          </div>
        </div>
        <img src="assets/images/evrywr.png" alt="evrywr" />
      </div>
      <div className="slide-container">
        <img src="assets/images/Group_32.png" alt="evrywr" />
      </div>
    </NukaCarousel>
  </div>
);

const About = () => (
  <div className="about">
    <div className="title">WHAT WE DO</div>
    <div className="spacer"></div>
    <div className="content">
      <p>
        We design, develop, launch and market digital products that change
        the way people work, play and connect. Our goal is to offer innovative
        web app and mobile app, communication and digital marketing solutions,
        in which we hold your hand throughout the whole life cycle.
      </p>
      <p>
        We are a truly global mobile app development company with 2 offices in 2 countries. The best part, we can help you to turn your app ideas into reality.
      </p>
    </div>
  </div>
)

const Services = () => (
  <div className="services-group">
    <div className="service" id="ideation">
      <img src="/assets/images/Group_33.png" alt=""/>
      <div className="content">
        <div className="step-number">01</div>
        <div className="title">Ideation Consulting</div>
      </div>
    </div>
    <div className="service" id="app-dev">
      <img src="/assets/images/Group_34.png" alt=""/>
      <div className="content">
        <div className="step-number">02</div>
        <div className="title">Application Development</div>
      </div>
    </div>
    <div className="service" id="marketing">
      <img src="/assets/images/Group_35.png" alt=""/>
      <div className="content">
        <div className="step-number">03</div>
        <div className="title">Digital Marketing</div>
      </div>
    </div>
    <div className="service" id="branding">
      <img src="/assets/images/Group_36.png" alt=""/>
      <div className="content">
        <div className="step-number">04</div>
        <div className="title">Branding & Design</div>
      </div>
    </div>
  </div>
);

const CallToAction = () => (
  <div className="call-to-action">
    <div className="title">BROWSE OUR PORTFOLIO</div>
    <div className="link">
      <i className="ri-chevron-right-circle"></i>
    </div>
  </div>
);

export default Home;