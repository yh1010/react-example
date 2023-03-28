// 函数组件特点：
//  1.没有生命周期
//  2.this关键字不能指向组件实例
//  3.没有内部状态
export default function AppFunc(props) {
  return (
    <div>
      <h2>hello react function Component</h2>
    </div>
  );
}
