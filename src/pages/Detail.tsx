import { type FC } from 'react'
import { useParams } from 'react-router-dom'

interface ParamsType {
  id?: string
}

const Detail: FC = () => {
  const urlParams: ParamsType = useParams()
  return (
    <div>
      <p>{urlParams.id}</p>
    </div>
  )
}

export default Detail
