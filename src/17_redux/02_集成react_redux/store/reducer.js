import {
  ADD_COUNT,
  SUB_COUNT,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from "./constants";

// 1.初始化数据
const initState = {
  count: 100,
  banners: [],
  recommends: []
};

// 2.定义redux函数：纯函数
export default function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_COUNT:
      return { ...state, count: action.count + state.count };
    case SUB_COUNT:
      return { ...state, count: state.count - action.count };
    case CHANGE_BANNER:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}
