import React from "react";

export default class MainBanner extends React.Component {
  render() {
    const { title, bannerList } = this.props;
    return (
      <div>
        <h2>轮播图: {title}</h2>
        <ul>
          {bannerList.map((item) => {
            return <li key={item.acm}>{item.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
