import { createRef, PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

export default class IsDisplay extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: true
    };
    this.sectionRef = createRef();
  }

  render() {
    const { isShow } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ isShow: !isShow })}>切换</button>
        {/* in:
              为true: 触发进入状态, 会添加-enter -enter-active的class开始执行动画;
                      动画结束后会添加-enter-done的class
              为flase: 触发退出状态, 会添加-exit、-exit-active的class开始执行动画;
                      动画结束后会添加-enter-done的class
            unmountOnExit: 退出后卸载组件
            timeout: 过渡时间
            appear: 初次进入动画
        */}
        <CSSTransition
          nodeRef={this.sectionRef}
          in={isShow}
          unmountOnExit={true}
          classNames="yyy"
          timeout={2000}
          appear
          onEnter={() => console.log("开始进入动画")}
          onEntering={() => console.log("执行进入动画")}
          onEntered={() => console.log("执行进入结束")}
        >
          <h2 ref={this.sectionRef}>哈哈哈哈</h2>
        </CSSTransition>
      </div>
    );
  }
}
