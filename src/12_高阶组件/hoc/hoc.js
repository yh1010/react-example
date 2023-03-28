import { PureComponent } from "react";

// 定义一个高阶组件
export default function hoc(OriginComponent) {
  // 定义一个类组件, 并设置需要增强的内容
  class NewComponent extends PureComponent {
    constructor() {
      super();

      this.state = {
        userInfo: {
          name: "yyyy",
          level: 99
        }
      };
    }

    // 对传递进来的组件进行增强
    render() {
      return <OriginComponent {...this.props} {...this.state.userInfo} />;
    }
  }

  // 返回新的组件
  return NewComponent;
}
