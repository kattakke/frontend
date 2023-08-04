import React from 'react'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import BookDetail from '../components/BookDetail'
import Button from '../components/Button'
import { useBooks } from '../hooks/useBook'

const Home = () => {
  const datas = useBooks([], 'desc')

  return (
    <div>
      <p className="font-bold text-xl">最近登録した本</p>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {datas.slice(0, 4).map((book) => (
          <BookDetail
            id={book.data.bookId}
            title={book.data.title}
            author={book.data.author}
            key={book.data.bookId}
          />
        ))}
      </div>
      <Link to="/search">
        <Button
          color="accent"
          gradation={true}
          className="mt-20 text-white flex items-center px-12 justify-between"
        >
          <p className="text-xl">本棚を検索</p>
          <HiOutlineSearch className="h-8 w-8" />
        </Button>
      </Link>
      <Link to="/register">
        <Button
          color="main"
          gradation={true}
          className="mt-4 text-white flex items-center px-12 justify-between"
        >
          <p className="text-xl">本棚に登録</p>
          <HiOutlinePlus className="h-8 w-8" />
        </Button>
      </Link>
    </div>
  )
}

export default Home
