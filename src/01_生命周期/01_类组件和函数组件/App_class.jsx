import React from "react";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "hello Class Component"
    };
  }

  render() {
    // render函数返回值：
    //  1.react元素
    //  2.数组或者fragments
    //  3.Portals: 可以渲染子节点到不同的dom树上
    const { message } = this.state;
    return (
      <div>
        <h2>{message}</h2>
      </div>
    );
  }
}

export default AppClass;
