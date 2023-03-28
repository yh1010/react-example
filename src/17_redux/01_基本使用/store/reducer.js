const { CHANGE_NAME } = require("./constants");

// 1.初始化数据
const initStore = {
  name: "yyy",
  count: 21
};

// 2.定义redux函数：纯函数
// 两个参数：
//  参数一: store目前保存的state
//  参数二: 本次需要更新的action(dispatch传入的action)
//  返回值: 它的返回值会作为store之后存储的state
function reducer(state = initStore, action) {
  if (action.type === CHANGE_NAME) {
    return { ...state, name: action.name };
  }
  return state;
}

module.exports = reducer;
