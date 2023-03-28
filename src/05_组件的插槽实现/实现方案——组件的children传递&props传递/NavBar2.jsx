import React from "react";

import "./style.css";

export default class NavBar extends React.Component {
  render() {
    const { leftSolt, centerSolt, rightSolt } = this.props;
    return (
      <div className="main">
        <div className="left">{leftSolt}</div>
        <div className="center">{centerSolt}</div>
        <div className="right">{rightSolt}</div>
      </div>
    );
  }
}
