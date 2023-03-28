import React from "react";

export default class AddChange extends React.Component {
  add(num) {
    this.props.addClick(num);
  }
  render() {
    return (
      <div>
        <button onClick={() => this.add(1)}> +1 </button>
        <button onClick={() => this.add(5)}> +5 </button>
        <button onClick={() => this.add(10)}> +10 </button>
      </div>
    );
  }
}
