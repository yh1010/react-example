import React from "react";
import Lifecycle from "./Lifecycle";

export default class Lifecycle2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true
    };
  }

  onChange() {
    this.setState({ isShow: !this.state.isShow });
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        {isShow && <Lifecycle />}
        <button onClick={() => this.onChange()}>隐藏</button>
      </div>
    );
  }
}
