import { PureComponent } from "react";
import hoc from "./hoc/hoc";
const Home = hoc(function (props) {
  return (
    <div>
      <h2>
        Home--{props.name}--{props.level}--{props.pic}
      </h2>
    </div>
  );
});

const Profile = hoc(function (props) {
  return (
    <div>
      <h2>
        Profile--{props.name}--{props.level}
      </h2>
    </div>
  );
});

const HelloFriend = hoc(function (props) {
  return (
    <div>
      <h2>
        HelloFriend--{props.name}--{props.level}
      </h2>
    </div>
  );
});

export default class ApplicationHeigh extends PureComponent {
  render() {
    return (
      <div>
        <Home pic={["轮播图1", "轮播图2"]} />
        <Profile />
        <HelloFriend />
      </div>
    );
  }
}
