import React from "react";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        {/* 使用children传递 */}
        <NavBar>
          <button>返回</button>
          <h3>购物车</h3>
          <span>图标</span>
        </NavBar>
        {/* 使用props传递 */}
        <NavBar2
          leftSolt={<button>返回1</button>}
          centerSolt={111}
          rightSolt={<span>图标</span>}
        />
      </div>
    );
  }
}
