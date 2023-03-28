import { memo, useEffect, useState } from "react";

// useEffect: 使用useEffect来给没有生命周期的组件，添加结束渲染的信号;
//            当前传入的回调函数会在组件被渲染完成后,自动执行;
//            可以存在多个useEffect函数
// 接收第一个函数作为参数:
//    返回一个函数，先执行返回函数，再执行参数函数
// 接收第二个参数: 依赖列表，只有依赖更新后，才会执行函数
//               []为空时，则副作用仅在组件挂载和卸载时执行

function Index() {
  const [counter, setCounter] = useState(0);

  // 应用场景: 网络请求/dom操作/事件监听
  useEffect(() => {
    document.title = counter;
    console.log("3.修改标题");
    // 清除上一次的副作用
    return () => {
      console.log("1.取消上一次的监听yyy");
    };
  });

  useEffect(() => {
    console.log("4.监听redux数据中的变化");
    // 清除上一次的副作用
    return () => {
      console.log("2.取消上一次的监听redux中的数据变化");
    };
  }, [counter]);

  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
export default memo(Index);
