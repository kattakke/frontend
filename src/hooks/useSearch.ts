import axios from 'axios'
import useSWR, { Fetcher } from 'swr'
import { Book } from '../types'

type Filter = {
  title: string[]
  author?: string
  isbn?: string
}

const googleFetcher: Fetcher<Object[], string[]> = async (query: string[]) => {
  if (query.length == 0) {
    return []
  }
  const res = await axios.get(import.meta.env.VITE_GOOGLE_BOOKS_API_URL, {
    params: { q: query.join('+') },
  })
  return res.data["items"]
}

export const useSearch: (filter: Filter) => Book[] = ({
  title,
  author,
  isbn,
}) => {
  const query = [...title, author, `isbn:${isbn}`]
  const {
    data: rawBooks,
    error,
    isLoading,
  } = useSWR<Object[], Error>(query, googleFetcher)
  console.log(rawBooks)
  if (!rawBooks) return []
  const books = rawBooks.map((rawBook) => {
    return {
      bookId: crypto.randomUUID().toString(),
      title: rawBook['volumeInfo']['title'],
      author: rawBook['volumeInfo']['authors'],
    }
  })
  return books
}
