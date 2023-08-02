import { fakerJA } from '@faker-js/faker'
import { User } from '../types'

const mockUser = (userId: string = fakerJA.string.uuid()): User => {
  const user = { userId: userId }
  return user
}

export const useUser = (userId: string | undefined): User => {

  return mockUser(userId)
}

export const useAuth = (): { isAuth: boolean } => {
  const isAuth = false
  return { isAuth }
}
