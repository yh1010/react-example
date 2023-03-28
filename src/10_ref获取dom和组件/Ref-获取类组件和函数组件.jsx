import React, { createRef, forwardRef, PureComponent } from "react";

const HelloWorldFunc = forwardRef(function (props, ref) {
  return (
    <div>
      <h2 ref={ref}>hello HelloWorldFunc</h2>
    </div>
  );
});
class HelloWorldClass extends PureComponent {
  test() {
    console.log("获取类组件实例");
  }
  render() {
    return <div></div>;
  }
}
export default class Ref_ClassAndFunc extends PureComponent {
  constructor() {
    super();

    this.titleRef = createRef();
  }

  getNaviteDOM() {
    console.log(this.titleRef.current);
  }

  render() {
    return (
      <div>
        <h2 ref="h2">Hello World</h2>
        {/* 获取类组件实例 
            直接使用 createRef
        */}
        <HelloWorldClass ref={this.titleRef} />
        {/* 获取函数组件 
            需要使用forwardRef并传入props,ref参数, 在需要被获取元素上加上ref属性
        */}
        <HelloWorldFunc ref={this.titleRef} />
        <button onClick={() => this.getNaviteDOM()}>获取DOM</button>
      </div>
    );
  }
}
