import { PureComponent } from "react";
import { createPortal } from "react-dom";

// Portal可以将子节点渲染到存在于父组件以外的dom节点上
// 第一个参数: 是任何可渲染的react子元素
// 第二个参数: 是一个dom元素
export default class Portal extends PureComponent {
  render() {
    return (
      <div>
        <h1>H1</h1>
        {createPortal(<h2>H2</h2>, document.querySelector("#yyyy"))}
      </div>
    );
  }
}
