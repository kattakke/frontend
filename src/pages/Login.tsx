import { type FC, useState } from 'react'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { useAuth } from '../hooks/useAuth'
import { Link, useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const submitLogin = (): void => {
    // TODO: login
    void login(email, password)
      .then(() => {
        navigate('/home', { replace: true })
      })
      .catch((e) => {
        throw e
      })
  }

  return (
    <div className="py-32">
      <div className="flex-col items-center justify-center space-y-12 rounded-3xl bg-white px-8 py-16 shadow-md">
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            ></TextField>
          </div>
        </div>
        <div className="flex flex-col  items-center justify-center">
          <Button className="mb-3" onClick={submitLogin}>
            ログイン
          </Button>
          <Link to={'/signup'}>
            <p className="border-b text-sm text-main">
              登録がお済みでない方はこちらから
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
