import React, { useState, useCallback } from "react";

// useCallback: 跟随状态更新执行
// 作用: 进行性能优化的点
//        1.当需要将一个函数传递给子组件时, 最好使用useCallback包裹函数进行优化, 将优化之后的函数传递给子组件
// 用法和useMemo类似
// 区别: useMemo缓存的是一个值，useCallback缓存的是一个函数
//      useMemo返回的是一个值, useCallback返回的是一个函数
function UseCallback() {
  const [num, setNum] = useState(1);

  const getDoubleNum = useCallback(() => {
    //console.log("获取双倍的num");
    return num * 2;
  }, [num]);
  return (
    <div
      onClick={() => {
        setNum((num) => num + 1);
      }}
    >
      hooks-UseCallback -- {getDoubleNum()}
    </div>
  );
}

export default UseCallback;
