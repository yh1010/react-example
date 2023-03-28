import React from "react";
import "./style.css";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      currIndex: 0
    };
  }

  cut(index) {
    this.setState({ currIndex: index });
    this.props.cutClick(index);
  }

  render() {
    const { titles } = this.props;
    const { currIndex } = this.state;
    return (
      <div className="tab-control">
        {titles.map((title, index) => {
          return (
            <div
              className={`item ${index === currIndex ? "active" : ""}`}
              key={title}
            >
              <span className="text" onClick={() => this.cut(index)}>
                {title}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}
