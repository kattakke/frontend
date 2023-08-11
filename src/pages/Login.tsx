import { useEffect, useState, type FC } from 'react'
import { type NavigateFunction } from 'react-router'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { useAuth } from '../hooks/useAuth'
import Alert from '~/components/Alert'

const navigateAfterLogin = (
  searchParams: URLSearchParams,
  navigate: NavigateFunction
): void => {
  const to = searchParams.get('to')
  navigate({ pathname: to ?? '/home' }, { replace: true })
}

const Login: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [alertOpen, setAlertOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const { login, autoLogin } = useAuth()

  useEffect(() => {
    console.log('start auto login')
    void autoLogin().then(() => {
      navigateAfterLogin(searchParams, navigate)
    })
  }, [autoLogin, navigate, searchParams])

  const submitLogin = (): void => {
    void login(email, password)
      .then(() => {
        navigateAfterLogin(searchParams, navigate)
      })
      .catch((e) => {
        setAlertMessage("ログインに失敗しました")
        setAlertOpen(true)
        throw e
      })
  }

  return (
    <div>
      <div className="flex-col items-center justify-center space-y-6 rounded-3xl bg-white px-6 py-8 shadow-md">
        <h1 className="text-center text-xl">ログイン</h1>
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
        <div className="mt-6 flex flex-col items-center justify-center pb-5">
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
      <Alert
        open={alertOpen}
        message={alertMessage}
        variant="error"
        onOpenChange={setAlertOpen}
      />
    </div>
  )
}

export default Login
