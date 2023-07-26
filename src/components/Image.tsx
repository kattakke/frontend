import React, { FC } from 'react'
import { CiImageOff } from 'react-icons/ci'

type Props = {
  src?: string
  alt?: string
  className?: string
}

const Image: FC<Props> = ({ src, alt = 'image', className }) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={['aspect-square shadow', className].join(' ')}
      />
    )
  } else {
    return (
      <span
        className={[
          'bg-white flex flex-col items-center justify-center space-y-2 shadow aspect-square text-main',
          className,
        ].join(' ')}
      >
        <CiImageOff className="h-10 w-10" />
        <span>No Image</span>
      </span>
    )
  }
}

export default Image
