import { PureComponent } from "react";

// 高阶组件：参数为组件，返回一个新的组件
// 定义一个高阶组件
function hoc(Cpn) {
  // 定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn name="hello" />;
    }
  }
  return NewCpn;
}

class HelloWorld extends PureComponent {
  render() {
    return <h2>hello world</h2>;
  }
}

const HelloWorldHOC = hoc(HelloWorld);
export default class HighComponent extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC />
      </div>
    );
  }
}
