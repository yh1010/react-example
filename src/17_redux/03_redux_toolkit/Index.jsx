import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import "./pages/style.css";

export class Index extends PureComponent {
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>APP - {counter}</h2>
        <div className="pages">
          <Home />
          <Profile />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
});

export default connect(mapStateToProps)(Index);
