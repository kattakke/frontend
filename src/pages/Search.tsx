import React from 'react'
import BookDetail from '../components/BookDetail'
import { useBooks } from '../hooks/useBook'

const Search = () => {
  const books = useBooks()

  console.log(books)

  return (
    <div>
      <div className='grid grid-cols-2 gap-4'>
        {books.map((book) => (
          <BookDetail imagePath="" title={book.title} author={book.author} />
        ))}
      </div>
    </div>
  )
}

export default Search
