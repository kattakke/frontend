import { type FC } from 'react'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col bg-base py-4">
        <div className="flex h-1/2">
          <div className="mx-10 mb-10 mt-auto w-full">
            <div className="flex flex-col items-center">
              <div className="flex w-full justify-center">
                <h1 className='text-main text-xl'>404 Not found</h1>
              </div>
              <div className="pt-6">
                <p className="text-main">
                  お探しのページは見つかりませんでした。
                </p>
              </div>
              <div className='mt-10 h-20 w-full bg-white rounded-lg shadow-md'>
                <div className='flex h-full  items-center justify-center relative'>
                  <img src="logo.png" alt="logo" className='h-10 w-10 left-2 absolute'/>
                  <Link to={'/'}>
                    <p className='text-accent border-b'>
                      Topページへ戻る
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
