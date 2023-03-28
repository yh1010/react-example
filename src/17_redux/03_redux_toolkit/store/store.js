import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
import homeReducer from "./features/home";

// configureStore用于创建store对象
// 常用的三个参数:
//    1.reducer, 将slice中的reducer可以组成一个对象传入此处
//    2.middleware, 可以使用参数, 传入其他中间件
//    3.devTools, 是否配置devTools, 默认为true
const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer
  }
});

export default store;
