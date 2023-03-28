import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../../02_集成react_redux/store/reducer";

// 打开 redux-tools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 使用redux-thunk进行组件异步操作
// const store = createStore(reducer, applyMiddleware(thunk));

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
