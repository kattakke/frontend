import React from "react"
import Button from "../components/Button"

const Top = () => {
  return (
    <>
      <div className="flex flex-col bg-book-shelf h-screen w-screen py-4">
        <div className="bg-white bg-opacity-80 rounded-2xl px-6 py-8 shadow-md mx-4 mt-60">
          <div className="flex flex-col items-center">
            <div className="flex justify-start w-full">
              <img src="/logo.png" alt="logo" className="h-10 w-10" />
            </div>
            <div className="px-24 pt-6 pb-10">
              <p className="text-main text-lg"><span className="text-accent">「かったっけ」</span>はあなたの本棚を管理するアプリ。登録した本をいつでもどこでも確認できます。</p>
            </div>
          </div>
        </div>
        <div className="px-4 mt-auto">
         <Button className='w-full'>ログイン画面へ</Button>
        </div>
      </div>
    </>
  )
}

export default Top
