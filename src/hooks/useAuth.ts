import { fakerJA } from '@faker-js/faker'
import { useContext, useState } from 'react'
import useSWR from 'swr'
import { AuthContext } from '../context/AuthProvider'
import { User } from '../types'
import { getFetcher, patchFetcher, postFetcher } from '../util/fetcher'

const mockUser = (userId: string = fakerJA.string.uuid()): User => {
  const user = { userId: userId }
  return user
}

export const useUser = (userId: string): User => {
  if (import.meta.env.VITE_MOCK) {
    return mockUser(userId)
  } else {
    return {}
  }
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const useProvideAuth = () => {
  const [isAuth, setIsAuth] = useState(false)
  const login = (email: string, password: string) => {
    const { data, error, isLoading } = useSWR(
      { url: '/auth/login', params: { id: email, password: password } },
      getFetcher
    )
    if (error) return
  }

  const signup = (email: string, password: string) => {
    const { data, error, isLoading } = useSWR(
      { url: '/users', params: { id: email, password: password } },
      postFetcher
    )
    if (error) return
  }

  const logout = () => {
    const {data,error,isLoading} = useSWR(
      {url: "/auth/logout"},
      patchFetcher
    )
  }
  const autoLogin = () => {}

  return { isAuth, login, signup, logout, autoLogin }
}
