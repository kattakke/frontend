import { fakerJA } from '@faker-js/faker'
import { Shelf } from '../types'
import { formatDate } from '../util/date'

const mockShelf = (shelfId: string = fakerJA.string.uuid()): Shelf => {
  const date = fakerJA.date.past()
  const emptyArray = Array(fakerJA.number.int({ min: 0, max: 10 }))
  const shelf = {
    shelfId: shelfId,
    books: [...emptyArray].map((_) => fakerJA.string.uuid()),
    createdAt: formatDate(date),
    updatedAt: formatDate(date),
  }
  return shelf
}

export const useShelf = (shelfId: string): Shelf => {
  return mockShelf(shelfId)
}