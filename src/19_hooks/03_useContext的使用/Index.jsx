import React, { useState, useContext, memo } from "react";
import { ThemeContext } from "./context";

// useContext: 将所有的数据统一的传递到子组件中
// 使用方式:
//  0.引入 createContext, useContext
//  1.createContext创建一个context句柄
//  2.context.Provider来确定共享范围
//  3.通过value来分发内容
//  4.在子组件中，通过useContext(context)来获取数据
// 注意事项: 上层数据发生改变，肯定会重新触发渲染

function Index() {
  const [num] = useState(1);

  return (
    <div>
      hooks-useContext -- {num}
      <ThemeContext.Provider value={num}>
        <Item01></Item01>
        <Item02></Item02>
      </ThemeContext.Provider>
    </div>
  );
}

function Item01() {
  const num = useContext(ThemeContext);
  return <div>组件1 -- {num}</div>;
}

function Item02() {
  const num = useContext(ThemeContext);
  return <div>组件2 -- {num + 2}</div>;
}

export default memo(Index);
