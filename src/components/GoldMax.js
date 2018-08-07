import React, { Component } from 'react';
import ComboNav from "./ComboNav";
import Footer from "./Footer";
import "../style/GoldMax.css";

class GoldMax extends Component {
  render() {
    return (
      <div className="gold-max">
        <ComboNav bw style={{ background: "#595D5F", color: "#DBD8D2" }}>
          <GoldMaxHeader />
        </ComboNav>
        <Snapshot />
        <Footer />
      </div>
    );
  }
}

const GoldMaxHeader = () => (
  <div className="gold-max-header">
    <div className="title">GOLD MAX CONSTRUCTION</div>
    <div className="content" style={{color: "#DBD8D2"}}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ipsum architecto vitae, minus delectus debitis iste autem labore quis, non sapiente dolor commodi atque consequuntur omnis aperiam molestiae tenetur numquam.
    </div>
  </div>
)

const Snapshot = () => (
  <div className="snapshot">
    <div className="title">HOMEPAGE</div>
    <div className="image"> 
      <img src="assets/images/Group_30.png" alt=""/>
    </div>
  </div>
)

export default GoldMax;
