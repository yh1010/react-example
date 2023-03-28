import React from "react";
import Content from "./Content";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      titles: ["新歌", "流行", "精选"],
      currIndex: 0
    };
  }

  homeCut(index) {
    this.setState({ currIndex: index });
  }

  render() {
    const { titles, currIndex } = this.state;
    return (
      <div>
        <Content
          titles={this.state.titles}
          cutClick={(currIndex) => this.homeCut(currIndex)}
        />
        <h1>{titles[currIndex]}</h1>
      </div>
    );
  }
}
