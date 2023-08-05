import { type FC, useState } from 'react'
import BookDetail from '../components/BookDetail'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { useSearch } from '../hooks/useSearch'

const Register: FC = () => {
  const [title, setTitle] = useState<string[]>([])
  const [author, setAuthor] = useState('')
  const [isbn, setIsbn] = useState('')
  const [, setIsCameraOn] = useState(false)
  const books = useSearch({ title, author, isbn })

  const onAddBook = (): void => {}

  return (
    <div className="pt-3">
      <div className="relative flex-col items-center justify-center space-y-6 rounded-3xl bg-white px-5 py-8 shadow-md">
        <h1 className="text-center text-lg">本棚に本を追加</h1>
        <div className="flex-col space-y-1">
          <p className="text-sm font-light">本のタイトル</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value.split(/\s/))
              }}
            ></TextField>
          </div>
        </div>
        <div className="flex-col space-y-1">
          <p className="text-sm font-light">著者名</p>
          <div className="flex">
            <TextField
              className="w-full flex-auto font-medium"
              placeholder=""
              type="text"
              onChange={(e) => {
                setAuthor(e.target.value)
              }}
            ></TextField>
          </div>
        </div>
        <div className="flex-col space-y-1">
          <p className="text-sm font-light">ISBN</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              type="text"
              onChange={(e) => {
                setIsbn(e.target.value)
              }}
            ></TextField>
          </div>
        </div>
        <div>
          <Button
            className="mb-3 w-full"
            color="accent"
            onClick={() => {
              setIsCameraOn(true)
            }}
          >
            バーコードから自動入力
          </Button>
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
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12">
          {books.map((book) => (
            <div key={book.bookId} className="flex flex-col justify-between">
              <BookDetail
                id={book.bookId}
                title={book.title}
                author={book.author}
                imagePath={book.imagePath}
              />
              <Button
                className="mt-2 w-full"
                onClick={() => {
                  onAddBook()
                }}
              >
                追加
              </Button>
            </div>
          ))}
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
