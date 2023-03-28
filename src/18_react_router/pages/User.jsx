import { PureComponent } from "react";
import withRouter from "../hoc/withRouter";

class User extends PureComponent {
  render() {
    const { query } = this.props.router;
    return (
      <div>
        <h2>
          User: {query.name}-{query.age}
        </h2>
      </div>
    );
  }
}
export default withRouter(User);
