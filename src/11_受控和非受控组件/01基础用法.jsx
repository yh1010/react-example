import { PureComponent } from "react";

export default class Controlled extends PureComponent {
  constructor() {
    super();
    this.state = {
      username: "1234"
    };
  }

  inputChange(event) {
    this.setState({ username: event.target.value });
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        {/* 受控组件 */}
        <input
          type="text"
          value={username}
          onChange={(e) => this.inputChange(e)}
        />
        {/* 非受控组件 */}
        <input type="text" />

        <h2>username: {username}</h2>
      </div>
    );
  }
}
