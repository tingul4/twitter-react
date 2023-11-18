import React from 'react'
import { Outlet } from 'react-router-dom'
import NavComponent from './nav-component'
import RecommendedFollowerListComponent from './recommended-follower-list-component'

const Layout = () => {
  return (
    <>
      <NavComponent />
      <RecommendedFollowerListComponent />
      <Outlet />
    </>
  )
}

export default Layout