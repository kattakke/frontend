import { type FC } from 'react'
import { CiImageOff } from 'react-icons/ci'

interface Props {
  src?: string
  alt?: string
  className?: string
}

const Image: FC<Props> = ({ src, alt = 'image', className }) => {
  if (src !== undefined) {
    return (
      <span className="flex justify-center">
        <img
          src={src}
          alt={alt}
          className={['h-40 shadow-lg', className].join(' ')}
        />
      </span>
    )
  } else {
    return (
      <span
        className={[
          'bg-white flex flex-col items-center justify-center space-y-2 shadow-lg aspect-square text-main h-40',
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
