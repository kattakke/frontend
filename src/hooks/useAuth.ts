import { fakerJA } from '@faker-js/faker'
import { User } from '../types'

const mockUser = (userId: string = fakerJA.string.uuid()): User => {
  const user = {}
  return user
}

export const useUser = (userId: string | undefined): User => {
  // userId が undefined なら /auth/me を叩く

  return mockUser(userId)
}
