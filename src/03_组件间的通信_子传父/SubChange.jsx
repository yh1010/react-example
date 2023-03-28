import React from "react";

export default class SubChange extends React.Component {
  sub(num) {
    this.props.subClick(num);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.sub(-1)}> -1 </button>
        <button onClick={() => this.sub(-5)}> -5 </button>
        <button onClick={() => this.sub(-10)}> -10 </button>
      </div>
    );
  }
}
