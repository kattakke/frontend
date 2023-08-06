import { useCallback, useContext, useState } from 'react'
import { AuthContext } from '~/context/AuthProvider'
import apiClient from '~/util/apiClient.ts'

export interface Auth {
  isAuth: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  autoLogin: () => Promise<void>
  getToken: () => string | null
}

export const useAuth = (): Auth => {
  return useContext(AuthContext)
}

const LS_TOKEN_KEY = 'token'

export const useProvideAuth = (): Auth => {
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState<string | null>(null)

  const login: Auth['login'] = useCallback(async (email, password) => {
    await apiClient.auth.login
      .$post({ body: { id: email, password } })
      .catch((e) => {
        throw e
      })
    setIsAuth(true)
    setToken('token-string')
    localStorage.setItem(LS_TOKEN_KEY, 'token-string')
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
        /* header: {} */
      })
    }
  }

  const getToken: Auth['getToken'] = () => {
    return token
  }

  return { isAuth, login, signup, logout, autoLogin, getToken }
}
