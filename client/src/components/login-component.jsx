import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoIcon from './icons/logo-icon'
import AuthService from '../services/auth-service'

const LoginComponent = (props) => {
  const { setCurrentUser } = props;
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeAccount = (e) => {
    setAccount(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    try {
      const response = await AuthService.login(account, password);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.alert("登入成功！您即將被重新導向至個人頁面！");
      setCurrentUser(AuthService.getCurrentUser());
      navigate("/");
    } catch (e) {
      setMessage(e.response.data);
    }
  };
  return (
    <div class="container">
      {message && <div className="alert alert-danger">{message}</div>}
      <div
        style={{
          height: "50px",
          width: "50px",
          margin: "64px auto 24px auto",
          padding: "5px",
        }}
      >
        <LogoIcon />
      </div>
      <div class="my-4 text-center">
        <h3 class="fw-bold mb-3">登入 Alphitter</h3>
      </div>
      <div style={{ width: "356px", margin: "0 auto" }}>
        <div class="form-floating mb-3">
          <input
            onChange={handleChangeAccount}
            type="text"
            class="form-control border-3 border-top-0 border-start-0 border-end-0"
            id="account"
            name="account"
            placeholder="請輸入帳號"
            style={{ backgroundColor: "#f5f8fa", important: true }}
            required
            autofocus
          />
          <label for="account">帳號</label>
        </div>
        <div class="form-floating mb-4">
          <input
            onChange={handleChangePassword}
            type="password"
            class="form-control border-3 border-top-0 border-start-0 border-end-0"
            id="password"
            name="password"
            placeholder="請輸入密碼"
            style={{ backgroundColor: "#f5f8fa", important: true }}
            required
          />
          <label for="password">密碼</label>
        </div>
        <div class="d-grid mb-3">
          <button
            class="btn pt-1 pb-1 ps-3 pe-3"
            style={{
              backgroundColor: "#FF6600",
              color: "white",
              borderRadius: "30px",
            }}
            onClick={handleLogin}
          >
            登入
          </button>
        </div>
        <div class="mb-4 d-flex justify-content-end">
          <p class="fw-bold">
            <a href="/signup">註冊</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent