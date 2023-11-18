import React from 'react'
import { Outlet } from 'react-router-dom'
import PersonalInfoNavComponent from './personal-info-nav-component'

const PersonalInfoComponent = () => {
  return (
    <>
      <div>PersonalInfoComponent</div>
      <PersonalInfoNavComponent />
      <Outlet />
    </>

  )
}

export default PersonalInfoComponent