import React from "react";

export default class MainProductList extends React.Component {
  // 在不设置state的情况下, 可以省略构造方法
  render() {
    const { productList } = this.props;
    return (
      <div>
        <h2>商品列表</h2>
        <ul>
          {productList.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
