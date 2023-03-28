import React, { PureComponent } from "react";
import { operate } from "../store/actionCreators";
import store from "../store/index";
import { ADD_COUNT } from "../store/constants";

export default class Home extends PureComponent {
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

  add(num) {
    store.dispatch(operate(ADD_COUNT, num));
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>Home - {count}</h2>
        <button onClick={() => this.add(1)}>+1</button>
        <button onClick={() => this.add(5)}>+5</button>
        <button onClick={() => this.add(8)}>+8</button>
      </div>
    );
  }
}
