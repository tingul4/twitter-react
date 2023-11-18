import React from 'react'
import LogoIcon from "./icons/logo-icon"

const SignupComponent = () => {
  return (
    <div className="container">
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
      <form
        className="needs-validation"
        style={{ width: "356px", margin: "0 auto" }}
        action="/signup"
        method="POST"
        noValidate
      >
        <div className="form-floating mb-3">
          <input
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
            type="submit"
            style={{
              backgroundColor: "#FF6600",
              color: "white",
              borderRadius: "30px",
            }}
          >
            註冊
          </button>
        </div>
        <div className="mb-4 d-flex justify-content-center">
          <p className="fw-bold">
            <a href="/login">取消</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupComponent