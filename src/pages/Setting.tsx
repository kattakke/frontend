import { type FC } from 'react'
import Button from '../components/Button'
import TextField from '../components/TextField'
import { useRequireLogin } from '~/hooks/useAuth.ts'

const Setting: FC = () => {
  useRequireLogin()

  return (
    <div className="pt-10 sm:pt-5">
      <div className="rounded-3xl bg-white p-8 shadow-md sm:h-[500px] sm:overflow-y-scroll sm:p-5">
        <h1 className="pb-6 text-center text-xl">プロフィールを変更</h1>
        <div className="space-y-2 pb-6">
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
        <div className="space-y-2 pb-6">
          <p className="font-light">メールアドレス</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="user@example.com"
              type="email"
            ></TextField>
          </div>
        </div>
        <div className="space-y-2 pb-6">
          <p className="font-light">パスワード</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="6文字以上で入力"
              type="password"
            ></TextField>
          </div>
        </div>
        <div className="space-y-2 border-b pb-6">
          <p className="font-light">パスワード再入力</p>
          <div className="flex">
            <TextField
              className="flex-auto font-medium"
              placeholder="6文字以上で入力"
              type="password"
            ></TextField>
          </div>
        </div>
        <div className="pb-12 pt-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="font-light">現在のパスワード</p>
              <p className="mt-auto text-xs text-red">※入力必須</p>
            </div>
            <div className="flex">
              <TextField
                className="flex-auto font-medium"
                placeholder="6文字以上で入力"
                type="password"
              ></TextField>
            </div>
          </div>
        </div>
        <Button className="w-full">保存</Button>
      </div>
    </div>
  )
}

export default Setting
