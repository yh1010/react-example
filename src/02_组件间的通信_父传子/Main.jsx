import React from "react";
import MainBanner from "./MainBanner";
import MainProductList from "./MainProductList";
import data from "./data";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "新歌",
      bannerList: [],
      productList: []
    };
  }

  componentDidMount() {
    console.log(data.data.recommend.list);
    this.setState({
      bannerList: data.data.banner.list,
      productList: data.data.recommend.list
    });
  }

  render() {
    const { title, bannerList, productList } = this.state;
    return (
      <div>
        <MainBanner title={title} bannerList={bannerList} />
        <MainProductList productList={productList} />
      </div>
    );
  }
}
