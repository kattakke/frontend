import React from "react"
import Button from "../components/Button"
import { Link } from 'react-router-dom'

const Top = () => {
  return (
    <>
      <div className="flex flex-col bg-book-shelf bg-cover bg-top h-screen w-screen py-4">
        <div className="h-2/3 flex">
          <div className="bg-white bg-opacity-80 rounded-2xl px-6 py-8 shadow-md mx-4 mt-auto mb-10 w-full">
            <div className="flex flex-col items-center">
              <div className="flex justify-start w-full">
                <img src="/logo.png" alt="logo" className="h-10 w-10" />
              </div>
              <div className="px-10 pt-6 pb-10 h-30">
                <p className="text-main text-lg"><span className="text-accent">「かったっけ」</span>はあなたの本棚を管理するアプリ。登録した本をいつでもどこでも確認できます。</p>
              </div>
            </div>
          </div>
        </div>
        <Link to={"/login"} className="px-4 mt-auto">
          <Button className='w-full'>ログイン画面へ</Button>
        </Link>
      </div>
    </>
  )
}

export default Top
