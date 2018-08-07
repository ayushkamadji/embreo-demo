import React, { Component } from 'react';
import TransitionWrapper from "./TransitionWrapper";
import ComboNav from "./ComboNav";
import Showcase from "./Showcase";
import Footer from "./Footer";
import "../style/Work.css";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <ComboNav style={{background: "linear-gradient(#DBD8D2FF, #DBD8D200)"}}>
          <WorkHeader />
        </ComboNav>
        <Showcase 
          url="/goldmax"
          bgUrl="/assets/images/Group_37.png"
          popUrl="/assets/images/Group_19.png"
          title="GOLDMAX CONSTRUCTION"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est inventore modi perspiciatis repellat facere hic quas nulla. Nemo cupiditate veritatis quod quisquam praesentium placeat dolorem laboriosam deleniti ipsa explicabo!" />
        <Showcase 
          right
          bgUrl="/assets/images/Group_38.png"
          popUrl="/assets/images/Group_22.png"
          title="McMILLAN WOODS"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est inventore modi perspiciatis repellat facere hic quas nulla. Nemo cupiditate veritatis quod quisquam praesentium placeat dolorem laboriosam deleniti ipsa explicabo!" />
        <Showcase 
          bgUrl="/assets/images/Group_39.png"
          popUrl="/assets/images/Group_21.png"
          title="SUNDER MEDICAL"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est inventore modi perspiciatis repellat facere hic quas nulla. Nemo cupiditate veritatis quod quisquam praesentium placeat dolorem laboriosam deleniti ipsa explicabo!" />
        <Showcase 
          right
          bgUrl="/assets/images/Group_40.png"
          popUrl="/assets/images/Group_23.png"
          title="MODULAR SPACE"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est inventore modi perspiciatis repellat facere hic quas nulla. Nemo cupiditate veritatis quod quisquam praesentium placeat dolorem laboriosam deleniti ipsa explicabo!" />
        <Footer />
      </div>
    );
  }
}

const WorkHeader = () => (
  <div className="work-header">
    <div className="title">OUR PORTFOLIO</div>
    <div className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quod vel, repellat neque magni maxime esse nesciunt consectetur? Tempora voluptates fuga quibusdam</div>
    <div className="header-nav">
      <div className="menu-title">FILTER WORK</div>
      <div className="menu-group">
        <div className="menu selected">ALL</div>
        <div className="menu">WEBSITE</div>
        <div className="menu">APP DESIGN</div>
        <div className="menu">BRANDING</div>
      </div>
    </div>
  </div>
);

export default TransitionWrapper(Work);
