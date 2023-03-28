import React, { PureComponent } from "react";
import Product from "./Product";
import Profile from "./Profile";
import Recmend from "./Recmend";

// render性能优化
// 1.类组件继承PureComponent
// 2.函数组件用memo包裹然后导出
export default class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "hello world",
      count: 0
    };
  }

  incr() {
    this.setState({ count: this.state.count + 1 });
  }

  changeText() {
    this.setState({ message: "hello state" });
  }

  render() {
    console.log("Home render");

    const { count, message } = this.state;
    return (
      <div>
        <h2>计数: {count}</h2>
        <button onClick={() => this.incr()}>加一操作</button>
        <h1>{message}</h1>
        <button onClick={() => this.changeText()}>修改文本</button>

        <Product message={message} />
        <Recmend />
        <Profile message={message} />
      </div>
    );
  }
}
