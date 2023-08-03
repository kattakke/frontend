import React from 'react'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { useAuth } from '../hooks/useAuth'

const Login = () => {
  const { login } = useAuth()

  return (
    <div className="py-32">
      <div className="bg-white rounded-3xl px-8 py-16 flex-col items-center justify-center space-y-12 shadow-md">
        <div className="flex-col space-y-2">
          <p className="font-light">メールアドレス</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="user@example.com"
              type="email"
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
            ></TextField>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button>ログイン</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
