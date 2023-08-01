import React from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'

const Register = () => {
  return (
    <div className='pt-3'>
      <div className='bg-white rounded-3xl px-5 py-8 flex-col items-center justify-center shadow-md space-y-6'>
        <h1 className='text-center text-lg'>本棚に本を追加</h1>
        <div className='flex-col space-y-1'>
          <p className='font-light text-sm'>本のタイトル</p>
          <div className='flex'>
            <TextField className='flex-auto font-medium' type='text'></TextField>
          </div>
        </div>
        <div className='flex-col space-y-1'>
          <p className='font-light text-sm'>ISBN</p>
          <div className='flex'>
            <TextField className='flex-auto font-medium' type='text'></TextField>
          </div>
        </div>
        <div className='flex'>
          <div className='w-1/2 pr-2'>
            <div className='flex-col space-y-1'>
              <p className='font-light text-sm'>著者名</p>
              <div className='flex'>
                <TextField className='flex-auto w-full font-medium' placeholder='' type='text'></TextField>
              </div>
            </div>
          </div>
          <div className='w-1/2 pl-2'>
            <div className='flex-col space-y-1 w-full'>
              <p className='font-light text-sm'>出版社名</p>
              <div className='flex'>
                <TextField className='flex-auto  w-full font-medium' placeholder='' type='text'></TextField>
              </div>
            </div>
          </div>
        </div>
        
        <div className='pt-8'>
          <Button className='w-full mb-3' color='accent'>バーコードから自動入力</Button>
          <Button className='w-full'>追加</Button>
        </div>
      </div>
    </div>
  )
}

export default Register
