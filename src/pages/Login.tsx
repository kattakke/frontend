import React from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'

const Login = () => {
  return (
    <div className='py-32'>
      <div className='bg-white rounded-3xl px-16 py-16 flex-col items-center justify-center space-y-12 shadow-md'>
        <div className='flex-col space-y-2'>
        <div className='font-light'>メールアドレス</div>
          <div className='flex'>
          <TextField className='flex-auto font-medium'></TextField>
          </div>
        </div>
        <div className='flex-col space-y-2'>
          <div className='font-light'>パスワード</div>
          <div className='flex'>
          <TextField className='flex-auto font-medium'></TextField>
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