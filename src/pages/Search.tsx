import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import BookDetail from '../components/BookDetail'
import TextField from '../components/TextField'
import { useBooks } from '../hooks/useBook'

const Search = () => {
  const datas = useBooks([])

  return (
    <div>
      <div className="flex items-center justify-between">
        <TextField className="w-full" />
        <HiOutlineSearch className="h-8 w-8 mx-3" />
      </div>
      <div className="flex items-center justify-center h-20 mt-4 bg-white border">
        <p>タグ検索とかジャンル検索とか</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {datas.map((book) => (
          <BookDetail
            imagePath={undefined}
            title={book.data.title}
            author={book.data.author}
          />
        ))}
      </div>
    </div>
  )
}

export default Search
