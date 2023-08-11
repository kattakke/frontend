import useAspidaSWR from '@aspida/swr'
import { useState, type FC } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import Spinner from '~/components/Spinner'
import { useAuth, useRequireLogin } from '~/hooks/useAuth.ts'
import apiClient from '~/util/apiClient.ts'
import BookDetail from '../components/BookDetail'
import TextField from '../components/TextField'

const Search: FC = () => {
  useRequireLogin()
  const [title, setTitle] = useState('')
  const { getUser } = useAuth()
  const { data: books, isLoading } = useAspidaSWR(
    apiClient.users._userId(getUser().userId ?? '').shelf,
    {
      query: { title },
    }
  )

  if (isLoading) return <Spinner />

  return (
    <div className="mb-20">
      <div className="flex items-center justify-between">
        <TextField
          className="w-full"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <HiOutlineSearch className="mx-3 h-8 w-8" />
      </div>
      {/* <div className="flex items-center justify-center h-20 mt-4 bg-white border">
        <p>タグ検索とかジャンル検索とか</p>
      </div> */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {books?.map((book) => (
          <BookDetail
            id={book.bookId}
            imagePath={book.imagePath}
            title={book.title}
            author={book.author}
            key={book.bookId}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
