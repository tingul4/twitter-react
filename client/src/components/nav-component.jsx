import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoIcon from './icons/logo-icon'
import HomeIcon from './icons/home-icon'
import UserIcon from './icons/user-icon'
import SettingIcon from './icons/setting-icon'
import AuthService from '../services/auth-service'
const NavComponent = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    AuthService.logout()
    navigate('/login')
  }
  return (
    <div
      style={{
        width: "178px",
        position: "fixed",
        zIndex: "1",
        top: "0",
        overflowX: "hidden",
        left: "130px",
      }}
      className="card border-white vh-100"
    >
      <div style={{ width: "50px", height: "50px" }} className="m-2 p-1">
        <LogoIcon />
      </div>
      <div
        style={{ height: "58px" }}
        className="d-flex align-items-center mx-2 mb-1"
      >
        <a
          style={{ color: "#FF6600" }}
          className="navbar-brand text-decoration-none mx-2 px-1"
          href="/"
        >
          <HomeIcon />
          <span className="h5 ms-3">首頁</span>
        </a>
      </div>
      <div
        style={{ height: "58px" }}
        className="d-flex align-items-center mx-2 mb-1"
      >
        <a
          style={{ color: "#171725" }}
          className="navbar-brand text-decoration-none mx-2 px-1"
          href={`/users/id/tweets`}
        >
          <UserIcon />
          <span className="h5 ms-3">個人資料</span>
        </a>
      </div>
      <div
        style={{ height: "58px" }}
        className="d-flex align-items-center mx-2 mb-1"
      >
        <a
          style={{ color: "#171725" }}
          className="navbar-brand text-decoration-none mx-2 px-1"
          href={`/users/id/edit`}
        >
          <SettingIcon />
          <span className="h5 ms-3">設定</span>
        </a>
      </div>
      <button
        id="tweetBtn"
        style={{
          backgroundColor: "#FF6600",
          color: "#FFFFFF",
          borderRadius: 30,
        }}
        className="btn px-3"
        data-bs-toggle="modal"
        data-bs-target="#myModalmain"
      >
        推文
      </button>
      <div
        style={{ height: 58 }}
        className="d-flex align-items-center mx-2 mb-1 position-absolute bottom-0 start-0"
      >
        <button
          style={{ color: "#171725" }}
          className="navbar-brand text-decoration-none mx-2 px-1"
          onClick={handleLogout}
        >
          <span className="h5 ms-3">登出</span>
        </button>
      </div>
    </div>
  );
}

export default NavComponent