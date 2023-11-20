import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogoIcon from "./icons/logo-icon"
import AuthService from '../services/auth-service'

const SignupComponent = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeAccount = (e) => {
    setAccount(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeCheckPassword = (e) => {
    setCheckPassword(e.target.value);
  };
  const handleSignup = () => {
    AuthService.signup(account, name, email, password, checkPassword)
      .then(() => {
        window.alert("註冊成功!您即將被導入登入頁面!");
        navigate("/login");
      })
      .catch((e) => setMessage(e.response.data));
  };
  return (
    <div className="container">
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
      <div className="mb-4 text-center">
        <h3 className="fw-bold mb-3">建立你的帳號</h3>
      </div>
      <div
        className="needs-validation"
        style={{ width: "356px", margin: "0 auto" }}
      >
        <div className="form-floating mb-3">
          <input
            onChange={handleChangeAccount}
            type="text"
            className="form-control border-3 border-top-0 border-start-0 border-end-0"
            id="account"
            name="account"
            placeholder="請輸入帳號"
            style={{ backgroundColor: "#f5f8fa", important: true }}
            required
            autoFocus
          />
          <label htmlFor="account">帳號</label>
          <div className="invalid-feedback">不可空白！</div>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={handleChangeName}
            type="text"
            id="name"
            name="name"
            placeholder="請輸入使用者名稱"
            maxLength="50"
            className="form-control border-3 border-top-0 border-start-0 border-end-0"
            style={{ backgroundColor: "#f5f8fa", important: true }}
            required
          />
          <label htmlFor="name">名稱</label>
          <div className="invalid-feedback">不可空白 且 字數不可超過50字！</div>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={handleChangeEmail}
            type="email"
            id="email"
            name="email"
            placeholder="請輸入Email"
            className="form-control border-3 border-top-0 border-start-0 border-end-0"
            style={{ backgroundColor: "#f5f8fa", important: true }}
            required
          />
          <label htmlFor="email">Email</label>
          <div className="invalid-feedback">不可空白！</div>
        </div>
        <div className="form-floating mb-3">
          <input
            onChange={handleChangePassword}
            type="password"
            id="password"
            name="password"
            placeholder="請輸入密碼"
            className="form-control border-3 border-top-0 border-start-0 border-end-0"
            style={{ backgroundColor: "#f5f8fa", important: true }}
            required
          />
          <label htmlFor="password">密碼</label>
          <div className="invalid-feedback">不可空白！</div>
        </div>
        <div className="form-floating mb-4">
          <input
            onChange={handleChangeCheckPassword}
            type="password"
            id="checkPassword"
            name="checkPassword"
            placeholder="請再次輸入密碼"
            className="form-control border-3 border-top-0 border-start-0 border-end-0"
            style={{ backgroundColor: "#f5f8fa", important: true }}
            required
          />
          <label htmlFor="checkPassword">密碼確認</label>
          <div className="invalid-feedback">不可空白！</div>
        </div>
        <div className="d-grid mb-3">
          <button
            className="btn pt-1 pb-1 ps-3 pe-3"
            style={{
              backgroundColor: "#FF6600",
              color: "white",
              borderRadius: "30px",
            }}
            onClick={handleSignup}
          >
            註冊
          </button>
        </div>
        <div className="mb-4 d-flex justify-content-center">
          <p className="fw-bold">
            <a href="/login">取消</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent