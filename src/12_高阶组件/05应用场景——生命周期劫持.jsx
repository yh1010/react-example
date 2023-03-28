import { PureComponent } from "react";
import loadTime from "./hoc/calculateLoadTime";

// 计算页面渲染所需要花费的时间
export class ItemList extends PureComponent {
  render() {
    return (
      <div>
        <ul>
          <li>数据列表1</li>
          <li>数据列表2</li>
          <li>数据列表3</li>
          <li>数据列表4</li>
          <li>数据列表5</li>
          <li>数据列表6</li>
          <li>数据列表7</li>
        </ul>
      </div>
    );
  }
}

export default loadTime(ItemList);
