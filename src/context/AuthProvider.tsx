import React, { createContext } from 'react'
import { useProvideAuth } from '../hooks/useAuth'

export const AuthContext = createContext({
    isAuth: false,
    login: undefined,
    signup: undefined,
    logout: undefined,
    autoLogin: undefined
})

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

