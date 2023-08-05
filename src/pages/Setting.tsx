import React from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'

const Setting = () => {
  return (
    <div className='py-32'>
      <div className='flex-col items-center justify-center rounded-3xl bg-white p-8 shadow-md'>
        <h1 className='text-2xl pb-6 text-center'>プロフィールを変更</h1>
        <div className='flex-col space-y-2 pb-6'>
          <p className='font-light'>名前</p>
          <div className='flex'>
          <TextField className='flex-auto font-medium' placeholder='田中太郎' type='text' name='name'></TextField>
          </div>
        </div>
        <div className='flex-col space-y-2 pb-6'>
          <p className='font-light'>メールアドレス</p>
          <div className='flex'>
          <TextField className='flex-auto font-medium' placeholder='user@example.com' type='email'></TextField>
          </div>
        </div>
        <div className='flex-col space-y-2 pb-6'>
          <p className='font-light'>パスワード</p>
          <div className='flex'>
          <TextField className='flex-auto font-medium' placeholder='6文字以上で入力' type='password'></TextField>
          </div>
        </div>
        <div className='flex-col space-y-2 border-b pb-6'>
          <p className='font-light'>パスワード再入力</p>
          <div className='flex'>
          <TextField className='flex-auto font-medium' placeholder='6文字以上で入力' type='password'></TextField>
          </div>
        </div>
        <div className='pb-12 pt-6'>
          <div className='flex-col space-y-2'>
            <div className='flex justify-between'>
              <p className='font-light'>現在のパスワード</p>
              <p className='mt-auto text-xs text-red'>※入力必須</p>
            </div>
            <div className='flex'>
            <TextField className='flex-auto font-medium' placeholder='6文字以上で入力' type='password'></TextField>
            </div>
          </div>
        </div>
        <Button className='w-full'>保存</Button>
      </div>
    </div>
  )
}

export default Setting
