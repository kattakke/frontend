import { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '~/context/AuthProvider'
import apiClient from '~/util/apiClient.ts'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { type User } from '~/types'

export interface Auth {
  isAuth: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  autoLogin: () => Promise<void>
  getAuthHeader: () => { Authorization: string }
  getUser: () => User
}

export const useAuth = (): Auth => {
  return useContext(AuthContext)
}

const constructAuthHeader = (token: string): { Authorization: string } => ({
  Authorization: `Bearer ${token}`,
})

const LS_TOKEN_KEY = 'token'

export const useProvideAuth = (): Auth => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  const login: Auth['login'] = useCallback(async (email, password) => {
    const newToken = await apiClient.auth.login
      .$post({ body: { id: email, password } })
      .catch((e) => {
        throw e
      })
    const newUser = await apiClient.auth.me
      .$get({
        headers: constructAuthHeader(newToken),
      })
      .catch((e) => {
        throw e
      })
    setIsAuth(true)
    setToken(newToken)
    setUser(newUser)
    localStorage.setItem(LS_TOKEN_KEY, newToken)
  }, [])

  const signup: Auth['signup'] = async (email, password) => {
    await apiClient.users
      .$post({ body: { id: email, password } })
      .catch((e) => {
        throw e
      })
    await login(email, password)
  }

  const logout: Auth['logout'] = async () => {
    await apiClient.auth.logout.$patch().catch((e) => {
      throw e
    })
    setIsAuth(false)
    setToken(null)
    setUser(null)
    localStorage.removeItem(LS_TOKEN_KEY)
  }

  const autoLogin: Auth['autoLogin'] = async () => {
    const token = localStorage.getItem(LS_TOKEN_KEY)
    if (token !== null) {
      await apiClient.auth.me.$get({
        headers: {
          ...getAuthHeader(),
        },
      })
    }
  }

  const getAuthHeader: Auth['getAuthHeader'] = () => {
    if (token === null) throw new Error('not logged in')
    return constructAuthHeader(token)
  }

  const getUser: Auth['getUser'] = () => {
    if (user === null) throw new Error('not logged in')
    return user
  }

  return { isAuth, login, signup, logout, autoLogin, getAuthHeader, getUser }
}

export const useRequireLogin = (): void => {
  const { isAuth } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth)
      navigate({
        pathname: '/login',
        search: `?${createSearchParams({ to: location.pathname }).toString()}`,
      })
  }, [isAuth])
}
