import { PureComponent } from "react";

export default function loadTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.begin = Date.now();
    }

    componentDidMount() {
      this.end = Date.now();
      const interval = this.end - this.begin;
      console.log(`${OriginComponent.name}渲染所需要花费的时间: ${interval}ms`);
    }

    render() {
      return <OriginComponent />;
    }
  };
}
