import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { changeBanners, changeRecommends } from "../store/actionCreators";
import data from "../data/data";
import { CHANGE_BANNER, CHANGE_RECOMMEND } from "../store/constants";

export class Category extends PureComponent {
  componentDidMount() {
    // 模拟请求服务器数据
    const banners = data.data.banner.list;
    const recommends = data.data.recommend.list;

    this.props.changeBanners(banners);
    this.props.changeRecommends(recommends);
  }
  render() {
    return (
      <div>
        <h2>Category</h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeBanners(banners) {
    dispatch(changeBanners(CHANGE_BANNER, banners));
  },
  changeRecommends(recommends) {
    dispatch(changeRecommends(CHANGE_RECOMMEND, recommends));
  }
});

export default connect(null, mapDispatchToProps)(Category);
