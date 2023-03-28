import { PureComponent } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import HomeRanking from "./pages/HomeRanking";
import HomeRecmmend from "./pages/HomeRecommend";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default class Index extends PureComponent {
  render() {
    return (
      <div>
        <div className="header">
          <h2>Header</h2>
          <div className="nav">
            <Link to="/home">首页</Link>
            <Link to="/about">&nbsp;关于</Link>
            <Link to="/login">&nbsp;登录</Link>
          </div>
        </div>
        <hr />
        <div className="content">
          {/* 5.x使用comment
              6.x使用element, 需要使用Routes包裹
          */}
          <Routes>
            {/* Navigate 路由跳转*/}
            <Route path="/" element={<Navigate to="/home" />} />
            {/* 路由嵌套 */}
            <Route path="/home" element={<Home />}>
              <Route path="/home" element={<Navigate to="/home/recommend" />} />
              <Route path="/home/recommend" element={<HomeRecmmend />} />
              <Route path="/home/ranking" element={<HomeRanking />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <hr />
        <div className="footer">
          <h2>footer</h2>
        </div>
      </div>
    );
  }
}
