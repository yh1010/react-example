import React, { PureComponent } from "react";

const store = require("./store/index");
const { changeName } = require("./store/actionCreators");

export default class Home extends PureComponent {
  render() {
    // 创建action --- 方法抽离
    // const changeName = (name) => ({ type: "change_name", name: name });

    // 订阅store中的数据
    const unSubscribe = store.subscribe(() => {
      console.log("订阅数据的变化: ", store.getState());
    });

    // 修改store中的数据
    store.dispatch(changeName("hhhh"));
    store.dispatch(changeName("zzzz"));

    // 取消订阅
    unSubscribe();

    // 调用取消订阅函数后, 不会执行下面的action
    store.dispatch(changeName("yyyy"));

    const { name, count } = store.getState();
    return (
      <div>
        <h2>
          {name} - {count}
        </h2>
      </div>
    );
  }
}
