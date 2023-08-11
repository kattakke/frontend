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
      .catch(() => {
        throw new Error('Invalid credential')
      })
    const newUser = await apiClient.auth.me
      .$get({
        headers: constructAuthHeader(newToken),
      })
      .catch(() => {
        throw new Error('Invalid auth token')
      })
    setIsAuth(true)
    setToken(newToken)
    setUser(newUser)
    localStorage.setItem(LS_TOKEN_KEY, newToken)
  }, [])

  const signup: Auth['signup'] = useCallback(
    async (email, password) => {
      await apiClient.users
        .$post({ body: { id: email, password } })
        .catch(() => {
          throw new Error('Invalid signup credential')
        })
      await login(email, password)
    },
    [login]
  )

  const logout: Auth['logout'] = useCallback(async () => {
    await apiClient.auth.logout.$patch().catch((e) => {
      throw e
    })
    setIsAuth(false)
    setToken(null)
    setUser(null)
    localStorage.removeItem(LS_TOKEN_KEY)
  }, [])

  const autoLogin: Auth['autoLogin'] = useCallback(async () => {
    const newToken = localStorage.getItem(LS_TOKEN_KEY)
    if (newToken == null) throw new Error('token not found')
    const newUser = await apiClient.auth.me.$get({
      headers: constructAuthHeader(newToken),
    })
    setIsAuth(true)
    setToken(newToken)
    setUser(newUser)
    localStorage.setItem(LS_TOKEN_KEY, newToken)
  }, [])

  const getAuthHeader: Auth['getAuthHeader'] = useCallback(() => {
    if (token === null) throw new Error('not logged in')
    return constructAuthHeader(token)
  }, [token])

  const getUser: Auth['getUser'] = useCallback(() => {
    if (user === null) throw new Error('not logged in')
    return user
  }, [user])

  return { isAuth, login, signup, logout, autoLogin, getAuthHeader, getUser }
}

export const useRequireLogin = (): void => {
  const { isAuth, autoLogin } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth)
      void autoLogin().catch(() => {
        navigate({
          pathname: '/login',
          search: `?${createSearchParams({
            to: location.pathname,
          }).toString()}`,
        })
      })
  }, [autoLogin, isAuth, location.pathname, navigate])
}
