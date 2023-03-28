import React from "react";

// context应用场景：UI主题, 登录认证信息, 地区
// 使用方式：
//  1.React.createContext创建context
//  2.使用ThemeContext.Provider包裹组件, value属性是需要共享的值
//  3.设置组件的contextType为某一个Context
//  4.this.context获取数据
const ThemeContext = React.createContext();

export default ThemeContext;
