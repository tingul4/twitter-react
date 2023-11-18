import React from 'react'
import LogoIcon from './icons/logo-icon'

const LoginComponent = () => {
  return (
    <div class="container">
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
      <form
        style={{ width: "356px", margin: "0 auto" }}
        action="/signin"
        method="POST"
      >
        <div class="form-floating mb-3">
          <input
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
            type="submit"
            style={{
              backgroundColor: "#FF6600",
              color: "white",
              borderRadius: "30px",
            }}
          >
            登入
          </button>
        </div>
        <div class="mb-4 d-flex justify-content-end">
          <p class="fw-bold">
            <a href="/signup">註冊</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginComponent