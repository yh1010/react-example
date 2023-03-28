import React, { PureComponent } from "react";
import store from "../store/index";
import { operate } from "../store/actionCreators";
import { SUB_COUNT } from "../store/constants";

export default class Profile extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: store.getState().count
    };
  }

  componentDidMount() {
    // 监听 store 变化
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ count: state.count });
    });
  }

  sub(num) {
    store.dispatch(operate(SUB_COUNT, num));
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Profile - {count}</h2>
        <button onClick={() => this.sub(1)}>-1</button>
        <button onClick={() => this.sub(5)}>-5</button>
        <button onClick={() => this.sub(8)}>-8</button>
      </div>
    );
  }
}
