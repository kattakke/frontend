import { type FC } from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

interface Props {
  id?: string
  imagePath?: string
  title?: string
  author?: string | null
  className?: string
}

const BookDetail: FC<Props> = ({ id, imagePath, title, author, className }) => {
  if (id === undefined) return null
  return (
    <Link
      to={`/detail/${id}`}
      className={['inline-block min-w-[45%]', className].join(' ')}
    >
      <Image src={imagePath} alt={'book'} className="mx-auto" />
      <div className="ml-2 mt-4">
        <p className="text-md font-bold">{title}</p>
        <p className="text-sm">{author}</p>
      </div>
    </Link>
  )
}

export default BookDetail
