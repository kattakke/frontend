import { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '~/context/AuthProvider'
import apiClient from '~/util/apiClient.ts'
import { useNavigate } from 'react-router-dom'

export interface Auth {
  isAuth: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  autoLogin: () => Promise<void>
  getAuthHeader: () => { Authorization: string }
}

export const useAuth = (): Auth => {
  return useContext(AuthContext)
}

const LS_TOKEN_KEY = 'token'

export const useProvideAuth = (): Auth => {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  const login: Auth['login'] = useCallback(async (email, password) => {
    const newToken = await apiClient.auth.login
      .$post({ body: { id: email, password } })
      .catch((e) => {
        throw e
      })
    setIsAuth(true)
    setToken(newToken)
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
    return { Authorization: `Bearer ${token}` }
  }

  return { isAuth, login, signup, logout, autoLogin, getAuthHeader }
}

export const useRequireLogin = (): void => {
  const { isAuth } = useAuth()
  console.log(isAuth)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuth) navigate('/login')
  }, [isAuth])
}
