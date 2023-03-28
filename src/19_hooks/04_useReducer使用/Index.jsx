import React, { useReducer } from "react";

// useReducer: 当state需要维护多个数据且它们互相依赖时，推荐使用useReducer
// 使用方式:
//  1.需要创建数据仓库 store 和 管理者 reducer
//  2.通过UseReducer(reducer, store)来获取state和dispatch

const store = {
  num: 11
};

const reducer = (state, action) => {
  switch (action.type) {
    case "changeNum":
      return {
        ...state,
        num: action.num
      };

    default:
      return {
        ...state
      };
  }
};

function Index() {
  const [state, dispatch] = useReducer(reducer, store);

  return (
    <div
      onClick={() => {
        dispatch({
          type: "changeNum",
          num: 100
        });
      }}
    >
      hooks-useReducer -- {state.num}
    </div>
  );
}

export default Index;
