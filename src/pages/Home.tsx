import useAspidaSWR from '@aspida/swr'
import { type FC } from 'react'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Spinner from '~/components/Spinner'
import { useAuth, useRequireLogin } from '~/hooks/useAuth.ts'
import apiClient from '~/util/apiClient'
import BookDetail from '../components/BookDetail'
import Button from '../components/Button'

const Home: FC = () => {
  useRequireLogin()
  const { getUser } = useAuth()
  const { data: recentBooks, isLoading } = useAspidaSWR(
    apiClient.users._userId(getUser().userId ?? '').shelf
  )

  return (
    <div className="pb-10">
      <p className="text-xl font-bold">ピックアップ</p>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4">
          {recentBooks
            ?.slice(0, 2)
            .map((book) => (
              <BookDetail
                id={book.bookId}
                title={book.title}
                author={book.author}
                imagePath={book.imagePath}
                key={book.bookId}
              />
            ))}
        </div>
      )}
      <Link to="/search">
        <Button
          color="accent"
          gradation={true}
          className="mt-20 flex items-center justify-between px-12 text-white"
        >
          <p className="text-xl">本棚を検索</p>
          <HiOutlineSearch className="h-8 w-8" />
        </Button>
      </Link>
      <Link to="/register">
        <Button
          color="main"
          gradation={true}
          className="mt-4 flex items-center justify-between px-12 text-white"
        >
          <p className="text-xl">本棚に登録</p>
          <HiOutlinePlus className="h-8 w-8" />
        </Button>
      </Link>
    </div>
  )
}

export default Home
