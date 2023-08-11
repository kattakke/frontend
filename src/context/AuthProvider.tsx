import { type FC, type ReactNode, createContext } from 'react'
import { useProvideAuth, type Auth } from '../hooks/useAuth'

export const AuthContext = createContext<Auth>({
  isAuth: false,
  login: async () => {},
  signup: async () => {},
  logout: async () => {},
  autoLogin: async () => {},
  getAuthHeader: () => ({ Authorization: '' }),
  getUser: () => ({}),
})

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
