import React, { useState, useMemo } from "react";

// useMemo: 让组件中的函数跟随状态更新
// 使用方式：
// 1.引入依赖
// 2.接收一个参数作为初始值
// 3.接收第二个参数 依赖列表
// 4.返回的是一个值
// 优化点: 对子组件传递相同内容的对象时，使用useMemo进行性能优化
function UseMemo() {
  const [num, setNum] = useState(1);
  const [age, setAge] = useState(18);

  const getDoubleNum = useMemo(() => {
    // console.log("获取双倍的num");
    return num * 2;
  }, [num]);
  return (
    <div
      onClick={() => {
        setAge((age) => age + 1);
      }}
    >
      这是一个函数组件 -- {getDoubleNum}, age的值 -- {age}
    </div>
  );
}

export default UseMemo;
