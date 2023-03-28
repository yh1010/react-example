import React, { createRef, PureComponent } from "react";

export default class Ref extends PureComponent {
  constructor() {
    super();

    this.titleRef = createRef();

    this.titleEL = null;
  }

  getNaviteDOM() {
    // 获取DOM操作的方式:
    //  1.refs
    //  console.log(this.refs.h2);
    // 2.使用createRef
    // console.log(this.titleRef.current);
    // 3.传入一个回调函数, 在对应元素被渲染之后, 回调函数被执行, 并将元素传入
    console.log(this.titleEL);
  }
  render() {
    return (
      <div>
        <h2 ref="h2">Hello World</h2>
        <h2 ref={this.titleRef}>Hello Ref</h2>
        <h2 ref={(el) => (this.titleEL = el)}>Hello titleEL</h2>
        <button onClick={() => this.getNaviteDOM()}>获取DOM</button>
      </div>
    );
  }
}
