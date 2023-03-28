import { PureComponent } from "react";
import ThemeHoc from "../hoc/theme_hoc";

// 函数式组件写法
// export function Product(props) {
//   // return (
//   //   <div>
//   //     <ThemeContext.Consumer>
//   //       {(value) => {
//   //         return (
//   //           <h2>
//   //             Prodcuct--theme: {value.color}--{value.size}
//   //           </h2>
//   //         );
//   //       }}
//   //     </ThemeContext.Consumer>
//   //   </div>
//   // );

//   return (
//     <div>
//       <h2>
//         Product: {props.color}--{props.size}
//       </h2>
//     </div>
//   );
// }

// 类组件写法
export class Product extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>
          Product: {this.props.color}--{this.props.size}
        </h2>
      </div>
    );
  }
}

export default ThemeHoc(Product);
