import React from "react";

import "./style.css";

export default class NavBar extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="main">
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    );
  }
}
