import React, { Component } from 'react';

class Showcase extends Component {
  state = {  }
  render() {
    const { left, right, bgUrl, popUrl, title, description } = this.props;
    let bgImageStyle;
    let bgInfoStyle;
    let popoutStyle = {};
    let titleStyle = {};
    let descriptionStyle = {};
    if (left || !right) {
      bgImageStyle = { "order": 1 };
      bgInfoStyle = { "order": 2 };
      popoutStyle = { "left": "13%" };
    } else {
      bgImageStyle = { "order": 2 };
      bgInfoStyle = { "order": 1, "align-items": "flex-end" };
      titleStyle = { textAlign: "right" };
      descriptionStyle = { textAlign: "right" };
      popoutStyle = { "right": "11%"}
    }
    return (
      <div className="showcase">
        <div className="joiner">
          <img src="assets/images/Line_3.png" alt=""/>
        </div>
        <div className="background">
          <div className="image" style={bgImageStyle}>
            <img src={bgUrl} alt=""/>
          </div>
          <div className="info" style={bgInfoStyle}>
            <div className="title" style={titleStyle}>{title}</div>
            <div className="description" style={descriptionStyle}>
              {description}
              <div className="more">DISCOVER - </div>
            </div>
          </div>
        </div>
        <div className="popout" style={popoutStyle}>
          <img src={popUrl} alt=""/>
        </div>
      </div>
    );
  }
}

export default Showcase;
