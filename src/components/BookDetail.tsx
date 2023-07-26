import React, { FC } from 'react'
import Image from './Image'

type Props = {
  imagePath?: string
  title: string
  author: string
  className?: string
}

const BookDetail: FC<Props> = ({ imagePath, title, author, className }) => {
  return (
    <div className={['inline-block min-w-[45%]', className].join(' ')}>
      <Image src={imagePath} alt={'book'} />
      <div className="ml-2 mt-1">
        <p className="text-md">{title}</p>
        <p className="text-sm">{author}</p>
      </div>
    </div>
  )
}

export default BookDetail
