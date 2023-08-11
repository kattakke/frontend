import React from 'react'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { useAuth } from '../hooks/useAuth'

const Signup = () => {
  const { login } = useAuth()

  return (
    <div className="py-8">
      <div className="bg-white rounded-3xl px-6 py-8 space-y-6 flex-col items-center justify-center shadow-md">
        <h1 className='text-center text-xl'>会員登録</h1>
        <div className="flex-col space-y-2">
          <p className="font-light">名前</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="田中太郎"
              type="text"
              name="name"
            ></TextField>
          </div>
        </div>
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
        <div className="flex-col space-y-2 pb-6">
          <p className="font-light">パスワード再入力</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="6文字以上で入力"
              type="password"
            ></TextField>
          </div>
        </div>
        <div className='flex pb-5 items-center justify-center'>
          <Button>登録</Button>
        </div>
      </div>
    </div>
  )
}

export default Signup