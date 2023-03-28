import { createSlice } from "@reduxjs/toolkit";

// createSlice用于创建一个slice
// 主要参数:
//    name: 用于标记slice的别名, 在之后的redux-devtool会显示对应的别名
//    initialState: 第一次初始值
//    reducers: 相当于之前的reducer函数, 里面的函数类似于原来reducer中的一个case语句
//              函数参数: 参数一: state
//                      参数二: 调用这个action时, 传递的action参数
// 返回值是一个对象, 包含所有的actions

const countSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 888
  },
  reducers: {
    addNumber(state, action) {
      state.counter = state.counter + action.payload;
    },
    subNumber(state, { payload }) {
      state.counter = state.counter - payload;
    }
  }
});

export const { addNumber, subNumber } = countSlice.actions;
export default countSlice.reducer;
