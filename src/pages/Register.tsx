import React, { useState } from 'react'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { useSearch } from '../hooks/useSearch'

const Register = () => {
  const [title, setTitle] = useState([])
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [isCameraOn, setIsCameraOn] = useState(false)
  const books = useSearch({ title, author, isbn })

  const onAddBook = () => {}

  return (
    <div className="pt-3">
      <div className="bg-white rounded-3xl px-5 py-8 flex-col items-center justify-center shadow-md space-y-6 relative">
        <h1 className="text-center text-lg">本棚に本を追加</h1>
        <div className="flex-col space-y-1">
          <p className="font-light text-sm">本のタイトル</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              type="text"
              onChange={(e) => setTitle(e.target.value.split(/\s/))}
            ></TextField>
          </div>
        </div>
        <div className="flex-col space-y-1">
          <p className="font-light text-sm">ISBN</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              type="text"
              onChange={(e) => setIsbn(e.target.value)}
            ></TextField>
          </div>
        </div>
        <div className="flex-col space-y-1">
          <p className="font-light text-sm">著者名</p>
          <div className="flex">
            <TextField
              className="flex-auto w-full font-medium"
              placeholder=""
              type="text"
              onChange={(e) => setAuthor(e.target.value)}
            ></TextField>
          </div>
          {/* <div className="w-1/2 pl-2">
            <div className="flex-col space-y-1 w-full">
              <p className="font-light text-sm">出版社名</p>
              <div className="flex">
                <TextField
                  className="flex-auto  w-full font-medium"
                  placeholder=""
                  type="text"
                ></TextField>
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col space-y-2">
          {books.map((book) => (
            <div key={book.bookId} className="flex justify-between space-x-2">
              <div>
                <p className="text-md">{book.title}</p>
                <p className="text-sm">{book.author}</p>
              </div>
              <Button
                className="w-20 shrink-0 grow-0"
                onClick={() => onAddBook()}
              >
                追加
              </Button>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <Button
            className="w-full mb-3"
            color="accent"
            onClick={() => setIsCameraOn(true)}
          >
            バーコードから自動入力
          </Button>
        </div>

        {/* 後でコメントイン */}

        {/* {isCameraOn && (
          <Scanner
            onDetected={() => {
              setIsCameraOn(false)
            }}
            className='absolute left-0 right-0 top-0'
          />
        )} */}
      </div>
    </div>
  )
}

export default Register
