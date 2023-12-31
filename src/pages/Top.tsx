import { type FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Top: FC = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col bg-book-shelf bg-cover bg-top">
        <div className="flex h-full flex-col bg-white/20 py-4">
          <div className="flex h-2/3">
            <div className="mx-4 mb-10 mt-auto w-full rounded-2xl bg-white/80 px-6 py-8 shadow-md">
              <div className="flex flex-col items-center">
                <div className="flex w-full justify-center">
                  <img src="/logo.png" alt="logo" className="h-10 w-10" />
                </div>
                <div className="px-5 pb-0 pt-6 text-lg text-main">
                  <p>
                    <span className="font-bold text-accent">
                      「かったっけ」
                    </span>
                    はあなたの本棚を管理するアプリ。
                  </p>
                  <p>登録した本をいつでもどこでも確認できます。</p>
                </div>
              </div>
            </div>
          </div>
          <Link to={'/login'} className="mt-auto px-4">
            <Button className="w-full">ログイン</Button>
          </Link>
          <Link to={'/signup'} className="mt-4 px-4">
            <Button className="w-full" variant="outline">
              新規登録
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Top
