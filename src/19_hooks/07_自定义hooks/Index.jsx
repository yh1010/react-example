import { memo } from "react";
import useScrollPosition from "./customhook/useScrollPosition";
import "./style.css";

const Home = memo(() => {
  const [scrollX, scrollY] = useScrollPosition();

  return (
    <div>
      <h2>
        Home Pages - {scrollX} - {scrollY}
      </h2>
    </div>
  );
});
const About = memo(() => {
  const [scrollX, scrollY] = useScrollPosition();

  return (
    <div>
      <h2>
        About Pages - {scrollX} - {scrollY}
      </h2>
    </div>
  );
});
const Index = memo(() => {
  return (
    <div className="app">
      <h1>APP Root</h1>
      {<Home />}
      {<About />}
    </div>
  );
});
export default Index;
