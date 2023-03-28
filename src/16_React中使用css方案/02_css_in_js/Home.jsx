import React, { PureComponent } from "react";
import { AppWrapper } from "./style";

export default class Home extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <div>
          <section className="section">1111</section>

          <div className="title">标题</div>
          <div className="content">内容</div>
          <div className="footer">页尾</div>
        </div>
      </AppWrapper>
    );
  }
}
