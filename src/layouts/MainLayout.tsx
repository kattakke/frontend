import { type FC } from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from '../components/AppHeader'

const MainLayout: FC = () => {
  return (
    <div className="min-h-screen bg-base">
      <AppHeader />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
