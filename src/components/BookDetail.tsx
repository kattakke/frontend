import React, { FC } from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

type Props = {
  id: string
  imagePath?: string
  title: string
  author: string
  className?: string
}

const BookDetail: FC<Props> = ({ id, imagePath, title, author, className }) => {
  return (
    <Link to={`/detail/${id}`} className={['inline-block min-w-[45%]', className].join(' ')}>
      <Image src={imagePath} alt={'book'} />
      <div className="ml-2 mt-1">
        <p className="text-md">{title}</p>
        <p className="text-sm">{author}</p>
      </div>
    </Link>
  )
}

export default BookDetail
