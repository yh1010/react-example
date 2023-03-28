import { PureComponent } from "react";

export default class Multiform extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmitClick(event) {
    console.log(this.state.username, this.state.password);

    // 阻止表单默认行为
    event.preventDefault();
  }

  handleChangeInput(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          <label htmlFor="username">
            用户名:
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => this.handleChangeInput(e)}
            />
          </label>

          <label htmlFor="password">
            密码:
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => this.handleChangeInput(e)}
            />
          </label>

          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}
