import { fakerJA } from '@faker-js/faker'
import useSWR from 'swr'
import { Shelf } from '../types'
import { formatDate } from '../util/date'
import { fetcher } from '../util/fetcher'

const mockShelf = (userId: string = fakerJA.string.uuid()): Shelf => {
  const date = fakerJA.date.past()
  const emptyArray = Array(fakerJA.number.int({ min: 0, max: 10 }))
  const shelf = {
    shelfId: fakerJA.string.uuid(),
    books: [...emptyArray].map((_) => fakerJA.string.uuid()),
    createdAt: formatDate(date),
    updatedAt: formatDate(date),
  }
  return shelf
}

export const useShelf = (
  userId: string
): { data: Shelf; error: Error; isLoading: boolean } => {
  if (import.meta.env.VITE_MOCK) {
    return { data: mockShelf(userId), error: null, isLoading: false }
  } else {
    return useSWR<Shelf, Error>(`/users/${userId}/shelf`, fetcher)
  }
}
