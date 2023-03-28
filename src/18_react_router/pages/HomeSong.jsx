import { PureComponent } from "react";
import withRouter from "../hoc/withRouter";
class HomeSong extends PureComponent {
  constructor() {
    super();
    this.state = {
      rankingData: [
        { id: 111, name: "歌单1" },
        { id: 112, name: "歌单2" },
        { id: 113, name: "歌单3" }
      ]
    };
  }

  navTo(id) {
    const { navigate } = this.props.router;
    navigate("/detail/" + id);
  }

  render() {
    const { rankingData } = this.state;

    return (
      <div>
        <h2>HomeSong Menu</h2>
        <ul>
          {rankingData.map((item) => {
            return (
              <li key={item.id} onClick={(e) => this.navTo(item.id)}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withRouter(HomeSong);
