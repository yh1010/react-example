import { memo, useEffect, useState } from "react";

// 自定义hook, 开头必须使用use
function useLogLife() {
  useEffect(() => {
    console.log("组件被创建");
    return () => {
      console.log("组件被销毁");
    };
  }, []);
}
const Home = memo(() => {
  useLogLife();
});
const About = memo(() => {
  useLogLife();
});
const Index = memo(() => {
  useLogLife();

  const [show, isShow] = useState(true);
  return (
    <div>
      <h1>APP Root</h1>
      <button onClick={(e) => isShow(!show)}>切换</button>
      {show && <Home />}
      {show && <About />}
    </div>
  );
});
export default Index;
