import React from "react";

export default class Lifecycle extends React.Component {
  // 1.执行构造方法 constructor
  constructor() {
    console.log("1. constructor");
    super();
    this.state = {
      message: "hello world"
    };
  }

  onChange() {
    this.setState({
      message: "hello world Lifecycle"
    });
  }

  // 2.执行render函数
  //    触发时机：挂载阶段, 更新阶段
  render() {
    const { message } = this.state;
    console.log("2. render");
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={() => this.onChange()}>显示</button>
      </div>
    );
  }

  // 3.组件被渲染到DOM: 被挂载到DOM
  componentDidMount() {
    console.log("3. componentDidMount");
  }

  // 4.组件的dom被更新完成: 组件发生更新
  componentDidUpdate() {
    console.log("4. componentDidUpdate");
  }

  // 5.组件卸载
  componentWillUnmount() {
    console.log("5. componentWillUnmount");
  }
}
