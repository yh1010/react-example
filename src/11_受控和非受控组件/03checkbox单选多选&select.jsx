import { PureComponent } from "react";

export default class CheckBox extends PureComponent {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      isAgree: false,
      hobbies: [
        { value: "sing", text: "唱", isChecked: false },
        { value: "dance", text: "跳", isChecked: false },
        { value: "rap", text: "rap", isChecked: false }
      ],
      fruits: "banana"
    };
  }

  handleSubmitClick(event) {
    const hobbies = this.state.hobbies
      .filter((item) => item.isChecked)
      .map((item) => item.value);
    console.log(
      this.state.username,
      this.state.password,
      hobbies,
      this.state.isAgree,
      this.state.fruits
    );

    // 阻止表单默认行为
    event.preventDefault();
  }

  handleChangeInput(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  changeCheckBox(event, index) {
    const hobbies = [...this.state.hobbies];
    hobbies[index].isChecked = event.target.checked;
    this.setState({ hobbies });
  }

  changeCheckBoxSinge(event) {
    this.setState({ isAgree: event.target.checked });
  }

  changeSelect(event) {
    const options = Array.from(event.target.selectedOptions);
    const values = options.map((item) => item.value);
    this.setState({ fruits: values });
  }
  render() {
    const { username, password, hobbies, isAgree, fruits } = this.state;
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmitClick(e)}>
          {/* input */}
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
          {/* 单选 */}
          <br />
          <label htmlFor="agree">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={isAgree}
              onChange={(e) => this.changeCheckBoxSinge(e)}
            />
            同意协议
          </label>
          {/* 多选 */}
          <br />
          爱好:
          {hobbies.map((item, index) => {
            return (
              <label htmlFor={item.value} key={item.value}>
                <input
                  type="checkbox"
                  id={item.value}
                  name={item.value}
                  checked={item.isChecked}
                  onChange={(e) => this.changeCheckBox(e, index)}
                />
                {item.text}
              </label>
            );
          })}
          <br />
          {/* select */}
          <select
            value={fruits}
            onChange={(e) => this.changeSelect(e)}
            multiple
          >
            <option value="apple">苹果</option>
            <option value="orange">橘子</option>
            <option value="banana">香蕉</option>
          </select>
          <button type="submit">注册</button>
        </form>
      </div>
    );
  }
}
