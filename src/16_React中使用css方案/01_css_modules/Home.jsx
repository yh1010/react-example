import React, { PureComponent } from "react";
import homeStyle from "./home.module.css";

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={homeStyle.title}>主题1</h2>
      </div>
    );
  }
}
