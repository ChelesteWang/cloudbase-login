import React from "react";

import {
  CloudbaseAuthenticator,
  onAuthUIStateChange,
  AUTHSTATE,
  LOGINTYPE,
  CloudbaseSignOut, // 登出组件
  CloudbaseSignIn, // 登录组件
  CloudbaseSetUsername, // 更新用户名组件
  CloudbaseForgotPassword, // 忘记密码组件
  CloudbaseResetPassword, // 重置密码组件
  CloudbaseSignUp, // 注册组件
} from "@cloudbase/ui-react";
import cloudbase from "@cloudbase/js-sdk";

const app = cloudbase.init({
  env: "your envId",
});

function App() {
  const [authState, setAuthState] = React.useState(AUTHSTATE.SIGNIN);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    return onAuthUIStateChange(app, (nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AUTHSTATE.SIGNEDIN && user ? (
    <div className="App">
      <header className="App-header">
        Hello, {user.uid}
        <CloudbaseSignOut app={app}></CloudbaseSignOut> {/* 注册按钮*/}
        <CloudbaseSetUsername
          app={app}
          handleSubmit={() => {
            console.log("更新完成用户名");
            // TODO: 自定义业务逻辑
          }}
        ></CloudbaseSetUsername>{" "}
        {/* 更新用户名组件框*/}
      </header>
    </div>
  ) : (
    <div className="App">
      <header className="App-header">
        <CloudbaseAuthenticator userLoginType={LOGINTYPE.NULL} app={app} />
      </header>
    </div>
  );
}

export default App;
