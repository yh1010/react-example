import { PureComponent } from "react";
import withRouter from "../hoc/withRouter";

class Detail extends PureComponent {
  render() {
    const { params } = this.props.router;

    return (
      <div>
        <h2>Detail Pages</h2>
        <h2>id: {params.id}</h2>
      </div>
    );
  }
}
export default withRouter(Detail);
