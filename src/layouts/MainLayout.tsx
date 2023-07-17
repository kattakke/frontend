import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'

const MainLayout = () => {
  return (
    <div className="bg-base min-h-screen">
      <AppHeader />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
