import { PureComponent } from "react";
import { Link, Outlet } from "react-router-dom";
import withRouter from "../hoc/withRouter";

class Home extends PureComponent {
  navigateTo(path) {
    const { navigate } = this.props.router;
    navigate(path);
  }

  render() {
    return (
      <div>
        <h2>Home Pages</h2>
        <Link to="/home/recommend">推荐</Link>
        <Link to="/home/ranking">&nbsp;排行榜</Link>&nbsp;
        <button onClick={(e) => this.navigateTo("/home/song")}>歌单</button>
        {/* 占位符组件 */}
        <Outlet />
      </div>
    );
  }
}
export default withRouter(Home);
