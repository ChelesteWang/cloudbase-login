import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Anonymous,
  Nouser,
  Custom,
  Wechat,
  Phone,
  Email,
  Username,
} from "./components/login";

function Hello() {
  return <h1>Hello CloudBase</h1>;
}

const RouteList = [
  {
    path: "/",
    info: "首页",
    component: <Hello />,
  },
  {
    path: "/nouser",
    info: "无登录",
    component: <Nouser />,
  },
  {
    path: "/anonymous",
    info: "匿名登录",
    component: <Anonymous />,
  },
  {
    path: "/email",
    info: "邮箱登录",
    component: <Email />,
  },
  {
    path: "/phone",
    info: "短信验证码登录",
    component: <Phone />,
  },
  {
    path: "/username",
    info: "用户名密码登录",
    component: <Username />,
  },
  {
    path: "/wechat",
    info: "微信认证登录",
    component: <Wechat />,
  },
  {
    path: "/custom",
    info: "自定义登录",
    component: <Custom />,
  },
];

function App() {
  return (
    <div>
      <Router>
        <header>
          <ul role="nav" style={{ marginBottom: 10 }}>
            {RouteList.map((item, index) => {
              return (
                <li style={{ float: "left", marginRight: 40 }}>
                  {<Link to={item.path}>{item.info}</Link>}
                </li>
              );
            })}
          </ul>
          <br />
        </header>
        <Routes>
          {RouteList.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.component} />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
