import React from 'react'
import { useBook } from '../hooks/useBook'

const Home = () => {
  const book = useBook('')

  return (
    <div>
      <p>title: {book.title}</p>
      <p>author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
    </div>
  )
}

export default Home
