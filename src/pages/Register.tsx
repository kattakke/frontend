import { useState, type FC } from 'react'
import Alert from '~/components/Alert'
import { useAuth, useRequireLogin } from '~/hooks/useAuth'
import apiClient from '~/util/apiClient.ts'
import BookDetail from '../components/BookDetail'
import Button from '../components/Button'
import Scanner from '../components/Scanner'
import TextField from '../components/TextField'
import { type Book } from '~/api/@types'

const Register: FC = () => {
  useRequireLogin()
  const { getAuthHeader } = useAuth()
  const [title, setTitle] = useState<string>('')
  const [isbn, setIsbn] = useState('')
  const [isCameraOn, setIsCameraOn] = useState(false)
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertVariant, setAlertVariant] = useState<'success' | 'error'>(
    'success'
  )
  const [alertMessage, setAlertMessage] = useState('')
  const [books, setBooks] = useState<Book[]>([])
  const [beforeQuery, setBeforeQuery] = useState<{
    title: string
    isbn: string
  }>({ title, isbn })

  const onSearchBooks = (): void => {
    if (beforeQuery.title !== title || beforeQuery.isbn !== isbn) {
      void apiClient.search.$get({ query: { title, isbn } }).then((_books) => {
        setBooks(_books)
      })
      setBeforeQuery({ title, isbn })
    }
  }

  const onAddBook = (
    addedIsbn?: string,
    addedTitle?: string,
    addedAuthor?: string,
    addedImagePath?: string
  ): void => {
    apiClient.books
      .$post({
        headers: getAuthHeader(),
        body: {
          isbn: addedIsbn,
          title: addedTitle,
          author: addedAuthor,
          imagePath: addedImagePath,
        },
      })
      .then((res) => {
        console.log(res)
        setAlertMessage(`『${res.title ?? ''}』を追加しました`)
        setAlertVariant('success')
        setAlertOpen(true)
      })
      .catch((err) => {
        console.log(err)
        setAlertMessage('エラーが発生しました')
        setAlertVariant('error')
        setAlertOpen(true)
      })
  }

  return (
    <div className="pt-3">
      <div className="mb-20 space-y-6 rounded-3xl bg-white px-5 py-8 shadow-md">
        <h1 className="text-center text-lg">本棚に本を追加</h1>
        <div className="space-y-1">
          <p className="text-sm font-light">本のタイトル</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              type="text"
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              onBlur={() => {
                onSearchBooks()
              }}
            />
          </div>
        </div>
        {/* <div className="space-y-1">
          <p className="text-sm font-light">著者名</p>
          <div className="flex">
            <TextField
              className="w-full flex-auto font-medium"
              placeholder=""
              type="text"
              onChange={(e) => {
                setAuthor(e.target.value)
              }}
              onBlur={() => {
                onSearchBooks()
              }}
            />
          </div>
        </div> */}
        <div className="space-y-1">
          <p className="text-sm font-light">ISBN</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              type="text"
              onChange={(e) => {
                setIsbn(e.target.value)
              }}
              value={isbn}
              onBlur={() => {
                onSearchBooks()
              }}
            />
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

        {books !== undefined && (
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12">
            {books?.map((book) => (
              <div key={book.isbn} className="flex flex-col justify-between">
                <BookDetail
                  title={book.title}
                  author={book.author}
                  imagePath={book.imagePath}
                />
                <Button
                  className="mt-2 w-full"
                  onClick={() => {
                    onAddBook(
                      book.isbn ?? '',
                      book.title,
                      book.author ?? '',
                      book.imagePath
                    )
                  }}
                >
                  追加
                </Button>
              </div>
            ))}
          </div>
        )}

        <Alert
          variant={alertVariant}
          open={alertOpen}
          onOpenChange={setAlertOpen}
          message={alertMessage}
        />

        {isCameraOn && (
          <>
            <Scanner
              onDetected={(code) => {
                setIsbn(code)
              }}
              onVideoOff={() => {
                setIsCameraOn(false)
              }}
              className="absolute inset-0 z-modal !m-auto h-fit w-[95%]"
            />
            <div
              className="absolute left-0 top-0 z-modal-overlay !mt-0 h-screen w-screen bg-gray/50"
              onClick={() => {
                setIsCameraOn(false)
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Register
