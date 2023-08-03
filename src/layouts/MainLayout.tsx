import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import { useAuth } from '../hooks/useAuth'

const MainLayout = () => {
  const { isAuth, autoLogin } = useAuth()

  // token が期限切れでなければ認証する
  // autoLogin()

  const location = useLocation()
  const isOnLoginPage = location.pathname == '/login'

  // 認証が実装できしだいコメントイン

  // if (!isAuth && !isOnLoginPage) {
  //   return <Navigate replace to="/login"></Navigate>
  // } else if (isAuth && isOnLoginPage) {
  //   return <Navigate replace to="/Home"></Navigate>
  // }

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
