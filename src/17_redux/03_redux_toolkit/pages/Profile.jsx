import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { subNumber } from "../store/features/counter";

export class Profile extends PureComponent {
  sub(num) {
    this.props.subNumber(num);
  }
  render() {
    const { counter, banners, recommends } = this.props;
    return (
      <div>
        <h2>Profile - {counter}</h2>
        <button onClick={() => this.sub(1)}>-1</button>
        <button onClick={() => this.sub(5)}>-5</button>
        <button onClick={() => this.sub(8)}>-8</button>

        <div>
          <h2>轮播展示</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>

        <div>
          <h2>推荐展示</h2>
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

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    banners: state.home.banners,
    recommends: state.home.recommends
  };
};
const mapDispatchToProps = (dispatch) => ({
  subNumber(num) {
    dispatch(subNumber(num));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
