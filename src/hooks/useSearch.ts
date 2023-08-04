import axios from 'axios'
import useSWR, { Fetcher } from 'swr'
import { Book } from '../types'

type Filter = {
  title: string[]
  author?: string
  isbn?: string
}

const googleFetcher: Fetcher<Object[], string[]> = async (query: string[]) => {
  if (query.join('') == '') {
    return []
  }
  const res = await axios.get(import.meta.env.VITE_GOOGLE_BOOKS_API_URL, {
    params: { q: query.join('+') },
  })
  return res.data['items']

  //   サンプルデータ
  // return [
  //     { volumeInfo: { title: 'ハリー・ポッターと死の秘宝 Part.1', authors: 'J.K.ローリング' } },
  //     { volumeInfo: { title: '大学入試　最短でマスターする数学A・B・C', authors: '稲荷誠' } },
  //     { volumeInfo: { title: '君の名は', authors: '新海誠' } },
  // ]
}

export const useSearch: (filter: Filter) => Book[] = ({
  title,
  author,
  isbn,
}) => {
  const query = [
    ...title,
    author ? `author:${author}` : '',
    isbn ? `isbn:${isbn}` : '',
  ]
  const {
    data: rawBooks,
    error,
    isLoading,
  } = useSWR<Object[], Error>(query, googleFetcher)

  if (!rawBooks) return []

  const books = rawBooks.map((rawBook) => {
    return {
      bookId: crypto.randomUUID().toString(),
      title: rawBook['volumeInfo']['title'],
      author: rawBook['volumeInfo']['authors']?.join(', '),
      imagePath: rawBook['volumeInfo']?.['imageLinks']?.['smallThumbnail'],
    }
  })
  return books
}
