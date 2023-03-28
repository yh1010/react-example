import { PureComponent } from "react";
import Cart from "./page/Cart";

export default class Login extends PureComponent {
  constructor() {
    super();
    this.state = {
      isLogin: false
    };
  }

  loginClick() {
    localStorage.setItem("token", "yyyy");
    // 让页面重新渲染
    // 方式一: setState
    //this.setState({ isLogin: true });
    // 方式二: 强制更新
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        app
        <button onClick={() => this.loginClick()}>登录</button>
        <Cart />
      </div>
    );
  }
}
