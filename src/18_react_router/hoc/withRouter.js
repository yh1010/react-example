import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from "react-router-dom";

// 使用高阶组件实现在类组件中使用手动路由跳转
export default function withRouter(WrapperComponent) {
  return (props) => {
    // 导航
    const navigate = useNavigate();
    // 动态路由传递的参数: /detail/:id
    const params = useParams();

    // 查询字符串的参数: /user?name=yyy&age=18
    const location = useLocation();
    const [searchParam] = useSearchParams();
    const query = Object.fromEntries(searchParam);

    const router = { navigate, params, location, query };

    return <WrapperComponent {...props} router={router} />;
  };
}
