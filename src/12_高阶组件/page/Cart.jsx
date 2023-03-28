import { PureComponent } from "react";
import loginAuth from "../hoc/login_auth";

export class Cart extends PureComponent {
  render() {
    return (
      <div>
        <h2>购物车页面</h2>
      </div>
    );
  }
}
export default loginAuth(Cart);
