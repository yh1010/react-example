import ThemeContext from "./context/ThemeContext";

// 函数组件使用共享数据的方式 ThemeContext.Consumer
export default function HomeBanner() {
  return (
    <div>
      <ThemeContext.Consumer>
        {(value) => {
          return <h2>Banner Theme: {value.color}</h2>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}
