import { PureComponent } from "react";
import ThemeContext from "./context/theme_context";
import Product from "./page/Product";

export default class ThemeTip extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{ color: "red", size: 30 }}>
          <Product />
        </ThemeContext.Provider>
      </div>
    );
  }
}
