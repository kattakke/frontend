import { fakerJA } from '@faker-js/faker'
import { useContext, useState } from 'react'
import useSWR from 'swr'
import { AuthContext } from '../context/AuthProvider'
import { type User } from '../types'
import { getFetcher, patchFetcher, postFetcher } from '../util/fetcher'

const mockUser = (userId: string = fakerJA.string.uuid()): User => {
  const user = { userId }
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
      { url: '/auth/login', params: { id: email, password } },
      getFetcher
    )
    if (error) {
      throw error
    }
    
    // call setIsAuth(true)
    // set localStrage
  }

  const signup = (email: string, password: string) => {
    const { data, error, isLoading } = useSWR(
      { url: '/users', params: { id: email, password } },
      postFetcher
    )
    if (error) {
      throw error
    }

    // call setIsAuth(true)
    // set localStrage
  }

  const logout = () => {
    const { data, error, isLoading } = useSWR(
      { url: '/auth/logout' },
      patchFetcher
    )
    if (error) {
      throw error
    }

    // call setIsAuth(false)
    // delete localStrage
  }

  const autoLogin = () => {

    // read localStrage

    const { data, error, isLoading } = useSWR({ url: '/auth/me' }, getFetcher)
    if (error) {
      throw error
    }

    // call setIsAuth(true)
  }

  return { isAuth, login, signup, logout, autoLogin }
}
