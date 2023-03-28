import {
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
  useRoutes
} from "react-router-dom";
import About from "./pages/About";
import Category from "./pages/Category";
import Detail from "./pages/Deail";
import Home from "./pages/Home";
import HomeRanking from "./pages/HomeRanking";
import HomeRecmmend from "./pages/HomeRecommend";
import HomeSong from "./pages/HomeSong";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Order from "./pages/Order";
import User from "./pages/User";
import routes from "./router";

export default function Index(props) {
  // useNavigate是个hook组件，只能用于函数组件中
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }
  return (
    <div>
      <div className="header">
        <h2>Header</h2>
        <div className="nav">
          <Link to="/home">首页</Link>
          <Link to="/about">&nbsp;关于</Link>
          <Link to="/login">&nbsp;登录</Link>&nbsp;
          <button onClick={(e) => navigateTo("/category")}>分类</button>
          <span onClick={(e) => navigateTo("/order")}>&nbsp;订单</span>
          <Link to="/user?name=yyy&age=18">&nbsp;用户</Link>
        </div>
      </div>
      <hr />
      <div className="content">
        {/* 5.x使用comment
              6.x使用element, 需要使用Routes包裹
          */}
        {/* <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<HomeRecmmend />} />
            <Route path="/home/ranking" element={<HomeRanking />} />
            <Route path="/home/song" element={<HomeSong />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/order" element={<Order />} />

          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/user" element={<User />} />

          <Route path="*" element={<NotFound />} />
        </Routes> */}

        {/* 路由配置  */}
        {useRoutes(routes)}
      </div>
      <hr />
      <div className="footer">
        <h2>footer</h2>
      </div>
    </div>
  );
}
