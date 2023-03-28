import React, { PureComponent } from "react";

export default class Product extends PureComponent {
  render() {
    console.log("product render");
    const { message } = this.props;
    return (
      <div>
        <h1>Product -- {message}</h1>
      </div>
    );
  }
}
