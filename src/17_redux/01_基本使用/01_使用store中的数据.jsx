import React, { PureComponent } from "react";

const store = require("./store");

export default class Home extends PureComponent {
  render() {
    // 使用store中的数据
    //console.log(store.getState());

    // 创建action
    const action = { type: "change_name", name: "hhhh" };
    const action1 = { type: "change_name", name: "zzzz" };

    // 订阅store中的数据
    const unSubscribe = store.subscribe(() => {
      console.log("订阅数据的变化: ", store.getState());
    });

    // 修改store中的数据
    store.dispatch(action);
    store.dispatch(action1);

    // 取消订阅
    unSubscribe();

    // 调用取消订阅函数后, 不会执行下面的action
    store.dispatch({ type: "change_name", name: "yyyy" });

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
