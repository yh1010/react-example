import React from "react";
import ThemeContext from "./context/ThemeContext";
import HomeBanner from "./HomeBanner";
import HomeInfo from "./HomeInfo";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>

        <ThemeContext.Provider value={{ color: "red", size: "30" }}>
          <HomeInfo />
          <HomeBanner />
        </ThemeContext.Provider>
      </div>
    );
  }
}
