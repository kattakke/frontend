import { type FC } from 'react'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import BookDetail from '../components/BookDetail'
import Button from '../components/Button'
import { type Book } from '~/types'

const Home: FC = () => {
  const recentBooks: Book[] = []

  return (
    <div>
      <p className="text-xl font-bold">最近登録した本</p>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {recentBooks.slice(0, 4).map((book) => (
          <BookDetail
            id={book.bookId}
            title={book.title}
            author={book.author}
            key={book.bookId}
          />
        ))}
      </div>
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
