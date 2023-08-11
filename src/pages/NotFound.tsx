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
                <h1 className="text-xl text-main">404 Not found</h1>
              </div>
              <div className="pt-6">
                <p className="text-main">
                  お探しのページは見つかりませんでした。
                </p>
              </div>
              <div className="mt-10 h-20 w-full rounded-lg bg-white shadow-md">
                <div className="relative flex  h-full items-center justify-center">
                  <img
                    src="logo.png"
                    alt="logo"
                    className="absolute left-2 h-10 w-10"
                  />
                  <Link to={'/'}>
                    <p className="border-b text-accent">Topページへ戻る</p>
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
