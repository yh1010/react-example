import React from "react";
import ThemeContext from "./context/ThemeContext";

// 类组件使用this.context
export default class HomeInfo extends React.Component {
  render() {
    return <div>HomeInfo: {this.context.color}</div>;
  }
}

HomeInfo.contextType = ThemeContext;
