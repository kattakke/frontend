import React, { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import BookDetail from '../components/BookDetail'
import TextField from '../components/TextField'
import { useBooks } from '../hooks/useBook'

const Search = () => {
  const [word, setWord] = useState('')
  const datas = useBooks([])

  return (
    <div>
      <div className="flex items-center justify-between">
        <TextField
          className="w-full"
          onChange={(e) => { setWord(e.target.value); }}
        />
        <HiOutlineSearch className="mx-3 h-8 w-8" />
      </div>
      {/* <div className="flex items-center justify-center h-20 mt-4 bg-white border">
        <p>タグ検索とかジャンル検索とか</p>
      </div> */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {datas.map(
          (book) =>
            (book.data.title + book.data.author).search(word) != -1 && (
              <BookDetail
                id={book.data.bookId}
                imagePath={undefined}
                title={book.data.title}
                author={book.data.author}
                key={book.data.bookId}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Search
