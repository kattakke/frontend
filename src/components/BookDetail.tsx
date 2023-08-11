import { type FC } from 'react'
import { Link } from 'react-router-dom'
import Image from './Image'

interface Props {
  id?: string
  imagePath?: string
  title?: string
  author?: string | null
  className?: string
}

const BookDetail: FC<Props> = ({ id, imagePath, title, author, className }) => {
  return (
    <Link
      to={id === undefined || id === '' ? '' : `/detail/${id}`}
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
