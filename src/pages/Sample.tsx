import { type FC } from 'react'
import Button from '../components/Button'
import TextField from '../components/TextField'

const Sample: FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Button>登録</Button>
      <Button color="accent">登録</Button>
      <TextField />
      <TextField color="accent" />
    </div>
  )
}

export default Sample
