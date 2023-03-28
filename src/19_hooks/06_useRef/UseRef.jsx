import React, { useState, useRef, useEffect } from "react";

// useRef:
//  1.函数组件访问dom元素
//  2.函数组件访问之间渲染的变量
// 注意事项:
//  返回一个子元素的索引，此索引在整个生命周期保持不变
//  对象发生改变，不通知；属性变更不重新渲染
function UseRef() {
  const [num, setNum] = useState(1);

  let ref = useRef();
  // 操作绑定dom
  let titleRef = useRef();
  let inputRef = useRef();

  useEffect(() => {
    ref.current = setInterval(() => {
      setNum((num) => num + 1);
    }, 400);
  }, []);

  useEffect(() => {
    if (num > 10) {
      clearInterval(ref.current);
    }
  }, [num]);

  function showDom() {
    console.log(titleRef.current);
    inputRef.current.focus();
  }
  return (
    <div>
      hooks-useRef -- {num}
      <h2 ref={titleRef}>hello world</h2>
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>查看title的dom</button>
    </div>
  );
}

export default UseRef;
