import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { addNumber } from "../store/features/counter";
import {
  changeBanner,
  changeRecommend,
  fetchHomeMultidata
} from "../store/features/home";

export class Home extends PureComponent {
  componentDidMount() {
    // 模拟请求服务器数据
    // const banners = data.data.banner.list;
    // const recommends = data.data.recommend.list;
    // store.dispatch(changeBanner(banners));
    // store.dispatch(changeRecommend(recommends));
    this.props.fetchHomeMultidata();
  }
  add(num) {
    this.props.addNumber(num);
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <h2>Home - {counter}</h2>
        <button onClick={() => this.add(1)}>+1</button>
        <button onClick={() => this.add(5)}>+5</button>
        <button onClick={() => this.add(8)}>+8</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter
});

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber(num) {
      dispatch(addNumber(num));
    },
    changeBanner(banners) {
      dispatch(changeBanner(banners));
    },
    changeRecommend(recommends) {
      dispatch(changeRecommend(recommends));
    },
    fetchHomeMultidata() {
      dispatch(fetchHomeMultidata());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
