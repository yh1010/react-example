import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Category from "../pages/Category";
import Deail from "../pages/Deail";
import Home from "../pages/Home";
import HomeRanking from "../pages/HomeRanking";
import HomeRecmmend from "../pages/HomeRecommend";
import HomeSong from "../pages/HomeSong";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Order from "../pages/Order";
import User from "../pages/User";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/recommend" />
      },
      {
        path: "/home/recommend",
        element: <HomeRecmmend />
      },
      {
        path: "/home/ranking",
        element: <HomeRanking />
      },
      {
        path: "/home/song",
        element: <HomeSong />
      }
    ]
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/category",
    element: <Category />
  },
  {
    path: "/order",
    element: <Order />
  },
  {
    path: "/user",
    element: <User />
  },
  {
    path: "/detail/:id",
    element: <Deail />
  },
  {
    path: "/*",
    element: <NotFound />
  }
];

export default routes;
