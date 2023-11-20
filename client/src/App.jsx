import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthService from './services/auth-service.js'
import LoginComponent from './components/login-component.jsx'
import SignupComponent from './components/signup-component.jsx'
import Layout from './components/layout.jsx'
import HomeComponent from './components/home-component.jsx'
import PersonalInfoComponent from './components/personal-info-component.jsx'
import SettingComponent from './components/setting-component.jsx'
import PersonalTweetsComponent from './components/personal-tweets-component.jsx'
import PersonalRepliesComponent from './components/personal-replies-component.jsx'
import PersonalLikesComponent from './components/personal-likes-component.jsx'

function App() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser())
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="login"
          element={
            <LoginComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route>
        <Route
          path="signup"
          element={
            <SignupComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeComponent />}></Route>
          <Route path="personalInfo" element={<PersonalInfoComponent />}>
            <Route path="tweets" element={<PersonalTweetsComponent />}></Route>
            <Route
              path="replies"
              element={<PersonalRepliesComponent />}
            ></Route>
            <Route path="likes" element={<PersonalLikesComponent />}></Route>
          </Route>
          <Route path="setting" element={<SettingComponent />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
