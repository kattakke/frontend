import { fakerJA } from '@faker-js/faker'
import useSWR from 'swr'
import { type Book } from '../types'
import { formatDate } from '../util/date'
import { getFetcher } from '../util/fetcher'

const range = (digit: number): { min: number; max: number } => {
  return { min: 10 ** (digit - 1), max: 10 ** digit - 1 }
}

const mockBook = (bookId: string = fakerJA.string.uuid()): Book => {
  const date = fakerJA.date.past()
  const book: Book = {
    bookId,
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

export const useBook = (
  bookId: string
): { data: Book; error: Error; isLoading: boolean } => {
  // TODO: delete mock
  if (import.meta.env.VITE_MOCK) {
    fakerJA.seed(12345)
    return { data: mockBook(bookId), error: null, isLoading: false }
  } else {
    const { data, error, isLoading } = useSWR<Book, Error>(
      { url: `/books/${bookId}` },
      getFetcher
    )
    return { data, error, isLoading }
  }
}

export const useBooks = (
  bookIds: string[],
  sort?: 'asc' | 'desc'
): Array<{ data: Book; error: Error; isLoading: boolean }> => {
  // TODO: delete mock
  if (import.meta.env.VITE_MOCK) {
    fakerJA.seed(12345)
    const num = fakerJA.number.int({ min: 3, max: 10 })
    return [...Array(num)].map((_) => {
      return { data: mockBook(), error: null, isLoading: false }
    })
  } else {
    const datas = [...Array(bookIds.length)].map((bookId) =>
      useSWR<Book, Error>({ url: `/books/${bookId}` }, getFetcher)
    )
    if (sort == 'asc') {
      datas.sort(
        (a, b) => Date.parse(a.data.createdAt) - Date.parse(b.data.createdAt)
      )
    } else if (sort == 'desc') {
      datas.sort(
        (a, b) => Date.parse(b.data.createdAt) - Date.parse(a.data.createdAt)
      )
    }
    return datas
  }
}
