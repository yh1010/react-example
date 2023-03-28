import { PureComponent } from "react";
import { Navigate } from "react-router-dom";

export default class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  login() {
    this.setState({ isLogin: true });
  }
  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <h2>Login Page</h2>
        {isLogin ? (
          <Navigate to="/home" />
        ) : (
          <button onClick={() => this.login()}>登录</button>
        )}
      </div>
    );
  }
}
