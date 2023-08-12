import { useState, type FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '~/components/Alert'
import { useAuth } from '~/hooks/useAuth'
import Button from '../components/Button'
import TextField from '../components/TextField'

const Signup: FC = () => {
  const [email, setEmail] = useState('')
  const [firstPassword, setFirstPassword] = useState('')
  const [secondPassword, setSecondPassword] = useState('')
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { signup } = useAuth()
  const navigate = useNavigate()

  const onSignup = (): void => {
    if (firstPassword !== secondPassword) {
      setAlertMessage('再入力されたパスワードが異なります')
      setAlertOpen(true)
      return
    }
    if (firstPassword.length < 6) {
      setAlertMessage('パスワードが短すぎます')
      setAlertOpen(true)
      return
    }
    setIsLoading(true)
    signup(email, firstPassword)
      .then(() => {
        navigate('/home')
      })
      .catch((e) => {
        setAlertMessage('登録に失敗しました')
        setAlertOpen(true)
        throw e
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div>
      <div className="flex-col items-center justify-center space-y-6 rounded-3xl bg-white px-6 py-8 shadow-md">
        <h1 className="text-center text-xl">新規登録</h1>
        {/* <div className="flex-col space-y-2">
          <p className="font-light">名前</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="田中太郎"
              type="text"
              name="name"
            ></TextField>
          </div>
        </div> */}
        <div className="flex-col space-y-2">
          <p className="font-light">メールアドレス</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="user@example.com"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            ></TextField>
          </div>
        </div>
        <div className="flex-col space-y-2">
          <p className="font-light">パスワード</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="6文字以上で入力"
              type="password"
              value={firstPassword}
              onChange={(e) => {
                setFirstPassword(e.target.value)
              }}
            ></TextField>
          </div>
        </div>
        <div className="flex-col space-y-2">
          <p className="font-light">パスワード再入力</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="6文字以上で入力"
              type="password"
              value={secondPassword}
              onChange={(e) => {
                setSecondPassword(e.target.value)
              }}
            ></TextField>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center pb-5">
          <Button className="mb-3" onClick={onSignup} loading={isLoading}>
            登録
          </Button>
          <Link to={'/login'}>
            <p className="border-b text-sm text-main">
              登録済みの方はこちらから
            </p>
          </Link>
        </div>
      </div>
      <Alert
        open={alertOpen}
        message={alertMessage}
        variant="error"
        onOpenChange={setAlertOpen}
      />
    </div>
  )
}

export default Signup
