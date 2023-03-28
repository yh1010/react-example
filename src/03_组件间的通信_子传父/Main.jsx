import React from "react";
import AddChange from "./AddChange";
import SubChange from "./SubChange";

// 子传父
// 通过props传递消息, 父组件给子组件传递一个回调函数, 在子组件中调用该函数
export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 10
    };
  }

  changeNum(num) {
    this.setState({ num: this.state.num + num });
  }
  render() {
    const { num } = this.state;
    return (
      <div>
        计数器: {num}
        <AddChange addClick={(num) => this.changeNum(num)} />
        <SubChange subClick={(num) => this.changeNum(num)} />
      </div>
    );
  }
}
