import React from "react";

export default class UseSetState extends React.Component {
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
    // 第一种基本使用
    // this.setState({ message: "hello state" });

    // 第二种可以传入一个回调函数
    // 优点:
    //  1.可以在回调函数中编写新的state逻辑
    //  2.可以获取之前的state和props值
    // this.setState(() => {
    //   return { message: "hello state" };
    // });

    // 第三种setState在react中是一个异步调用
    // 如果需要数据更新之后获取到对应的结果执行一些逻辑,
    // 可以在setState中传入第二个参数：callback

    this.setState({ message: "hello state" }, () => {
      console.log("setState执行之后的结果", this.state.message);
    });
    console.log("setState执行之前的结果", this.state.message);
  }

  render() {
    const { count, message } = this.state;
    return (
      <div>
        <h2>计数: {count}</h2>
        <button onClick={() => this.incr()}>加一操作</button>
        <h1>{message}</h1>
        <button onClick={() => this.changeText()}>修改文本</button>
      </div>
    );
  }
}
