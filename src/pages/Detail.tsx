import useAspidaSWR from '@aspida/swr'
import { useState, type FC } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '~/components/Spinner'
import { useAuth, useRequireLogin } from '~/hooks/useAuth.ts'
import apiClient from '~/util/apiClient.ts'
import Alert from '../components/Alert'
import Button from '../components/Button'
import Image from '../components/Image'

interface ParamsType {
  id?: string
}

const Detail: FC = () => {
  useRequireLogin()
  const urlParams: ParamsType = useParams()
  const { data: book, isLoading } = useAspidaSWR(
    apiClient.books._bookId(urlParams?.id ?? '')
  )
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertVariant, setAlertVariant] = useState<'success' | 'error'>(
    'success'
  )
  const { getAuthHeader } = useAuth()

  const onDeleteBook = (): void => {
    apiClient.books
      ._bookId(urlParams.id ?? '')
      .$delete({
        headers: getAuthHeader(),
      })
      .then(() => {
        setAlertMessage(`『${book?.title ?? ''}』を削除しました`)
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

  if (book === undefined)
    return isLoading ? (
      <Spinner />
    ) : (
      <>
        <Alert
          variant="error"
          open
          onOpenChange={() => {}}
          message="該当する本が見つかりませんでした。"
        />
      </>
    )

  return (
    <div>
      <div className="relative w-full rounded-3xl bg-white p-10 shadow-md">
        <Image src={book.imagePath} className="inset-x-0 mx-auto mb-10" />
        <table className="w-full">
          <tbody className="w-full">
            <tr className="w-full border-spacing-2 border-b border-main">
              <td className="w-2/5 font-bold text-main">
                <p className="px-4 py-2">タイトル</p>
              </td>
              <td>{book.title}</td>
            </tr>
            <tr className="w-full border-spacing-2 border-b border-main">
              <td className="w-2/5 font-bold text-main">
                <p className="px-4 py-2">著者</p>
              </td>
              <td>{book.author}</td>
            </tr>
            <tr className="w-full border-spacing-2 border-b border-main">
              <td className="w-2/5 font-bold text-main">
                <p className="px-4 py-2">ISBNコード</p>
              </td>
              <td>{book.isbn}</td>
            </tr>
            <tr className="w-full">
              <td className="w-2/5 font-bold text-main">
                <p className="px-4 py-2">登録日時</p>
              </td>
              <td>{book.createdAt?.slice(0, 10)}</td>
            </tr>
          </tbody>
        </table>
        <Button color="accent" className="mt-4 w-full" onClick={onDeleteBook}>
          本棚から削除
        </Button>
      </div>
      {/* <div>
        <h1 className="mt-10 text-lg">関連書籍</h1>
        <div className="flex space-x-4 overflow-x-scroll p-4">
          {relatedBooks.map(({ data: value }) => (
            <BookDetail
              key={value.bookId}
              id={value.bookId}
              title={value.title}
              author={value.author}
              imagePath={value.imagePath}
            />
          ))}
        </div>
      </div> */}
      <Alert
        variant={alertVariant}
        message={alertMessage}
        open={alertOpen}
        onOpenChange={setAlertOpen}
      />
    </div>
  )
}

export default Detail
