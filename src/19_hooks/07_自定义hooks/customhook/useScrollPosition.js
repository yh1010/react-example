import { useEffect, useState } from "react";

// 获取窗口滚动的位置
export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      console.log("取消上一次监听");

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrollX, scrollY];
}
