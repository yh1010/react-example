import { memo, useState } from "react";

// useState: 使用useState来创建状态
// 1.引入依赖
// 2.接收一个参数作为初始值
// 3.返回一个数组，第一个值为状态。第二个值为改变状态的函数
// 使用规则:
//  只能在函数最外层调用hook
//  只能在函数组件中调用hook
function Index() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>当前计数: {counter}</h2>
      <button onClick={(e) => setCounter(counter - 1)}>-1</button>
      <button onClick={(e) => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
export default memo(Index);
