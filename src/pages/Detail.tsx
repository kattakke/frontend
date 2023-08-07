import { type FC } from 'react'
import { useParams } from 'react-router-dom'
import BookDetail from '../components/BookDetail'
import Button from '../components/Button'
import Image from '../components/Image'
import { useBook, useBooks } from '../hooks/useBook'

interface ParamsType {
  id?: string
}

const Detail: FC = () => {
  const urlParams: ParamsType = useParams()
  const { data: book } = useBook(urlParams.id)
  const relatedBooks = useBooks([])

  return (
    <div className="overflow-hidden">
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
              <td>{book.createdAt}</td>
            </tr>
          </tbody>
        </table>
        <Button color="accent" className="mt-4 w-full">
          本棚から削除
        </Button>
      </div>
      <div>
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
      </div>
    </div>
  )
}

export default Detail
