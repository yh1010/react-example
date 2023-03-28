import { PureComponent } from "react";

export default class AppFinal extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { name: "java", price: 99, count: 1 },
        { name: "c#", price: 89, count: 1 },
        { name: ".net", price: 79, count: 1 },
        { name: "js", price: 69, count: 1 }
      ]
    };
  }

  addBook() {
    const { books } = this.state;
    // 不可在原有数据中直接进行添加, 组件继承PureComponent后无法做到重新渲染;
    // 需要先进行对原有数据进行浅拷贝
    const newBooks = [...books];
    newBooks.push({ name: "vue", price: 990, count: 1 });
    this.setState({ books: newBooks });
  }

  addCount(index) {
    const newBooks = [...this.state.books];

    newBooks[index].count++;
    this.setState({ books: newBooks });
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <ul>
          {books.map((item, index) => {
            return (
              <li key={index}>
                {item.name} -- {item.price} -- {item.count} --
                <button onClick={() => this.addCount(index)}>+1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={() => this.addBook()}>添加书籍</button>
      </div>
    );
  }
}
