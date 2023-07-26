import { fakerJA } from '@faker-js/faker'
import { Book } from '../types'
import { formatDate } from '../util/date'

const range = (digit: number): { min: number; max: number } => {
  return { min: 10 ** (digit - 1), max: 10 ** digit - 1 }
}

const mockBook = (bookId: string = fakerJA.string.uuid()): Book => {
  const date = fakerJA.date.past()
  const book: Book = {
    bookdId: bookId,
    isbn: [
      fakerJA.number.int(range(3)),
      fakerJA.number.int(range(1)),
      fakerJA.number.int(range(5)),
      fakerJA.number.int(range(3)),
      fakerJA.number.int(range(1)),
    ].join('-'),
    title: fakerJA.word.noun({ length: { min: 3, max: 15 } }),
    author: fakerJA.person.fullName(),
    createdAt: formatDate(date),
    updatedAt: formatDate(date),
  }
  return book
}

export const useBook = (bookId: string): Book => {
  return mockBook(bookId)
}

export const useBooks = (): Book[] => {
  const num = fakerJA.number.int({ min: 3, max: 10 })
  return [...Array(num)].map(_ => mockBook())
}
