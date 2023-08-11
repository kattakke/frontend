import { type FC } from 'react'

interface Props {
  className?: string
}

const Spinner: FC<Props> = ({ className }) => {
  return (
    <div className="flex justify-center" aria-label="読み込み中">
        <div className={["h-10 w-10 animate-spin rounded-full border-4 border-main border-t-transparent", className].join(" ")}></div>
    </div>
  )
}

export default Spinner
