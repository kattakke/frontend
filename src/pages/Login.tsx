import React from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'

const Login = () => {
  return (
    <div className='py-32'>
      <div className='bg-white rounded-3xl px-8 py-16 flex-col items-center justify-center space-y-12 shadow-md'>
        <div className='flex-col space-y-2'>
          <p className='font-light'>メールアドレス</p>
          <div className='flex'>
          <TextField className='flex-auto font-medium' placeholder='メールアドレス'></TextField>
          </div>
        </div>
        <div className='flex-col space-y-2'>
          <p className='font-light'>パスワード</p>
          <div className='flex'>
          <TextField className='flex-auto font-medium' placeholder='パスワード'></TextField>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <Button>ログイン</Button>
        </div>
      </div>
    </div>
  )
}

export default Login