import React, { PureComponent } from "react";
import About from "./page/About";
import Category from "./page/Category";
import Home from "./page/Home";
import Profile from "./page/Profile";
import "./page/style.css";
import store from "./store/index";

export default class Index extends PureComponent {
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
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2>APP - {count}</h2>
        <div className="pages">
          <Home />
          <Profile />
          <About />
          <Category />
        </div>
      </div>
    );
  }
}
