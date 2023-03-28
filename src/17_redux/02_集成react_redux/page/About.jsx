import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { operate } from "../store/actionCreators";
import { ADD_COUNT, SUB_COUNT } from "../store/constants";

export class About extends PureComponent {
  operation(count, isAdd) {
    if (isAdd) {
      this.props.addNumber(count);
    } else {
      this.props.subNumber(count);
    }
  }

  render() {
    const { count, banners, recommends } = this.props;
    return (
      <div>
        <h2>About - {count}</h2>
        <button onClick={() => this.operation(10, true)}>+10</button>
        <button onClick={() => this.operation(5, false)}>-5</button>
        <button onClick={() => this.operation(100, true)}>+100</button>

        {/* 异步请求数据操作 */}
        <div>
          <h2>轮播图数据：</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
        <div>
          <h2>推荐数据：</h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.count,
  banners: state.banners,
  recommends: state.recommends
});

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(operate(ADD_COUNT, num));
  },
  subNumber(num) {
    dispatch(operate(SUB_COUNT, num));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
