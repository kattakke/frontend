import { useState, type FC } from 'react'
import {
  HiOutlineCog,
  HiOutlineHome,
  HiOutlineLogout,
  HiOutlinePlus,
  HiOutlineSearch,
} from 'react-icons/hi'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
// import { useAuth } from '../hooks/useAuth'

const AppHeader: FC = () => {
  const [open, setOpen] = useState(false)
  // const { logout } = useAuth()

  return (
    <div className="flex h-20 items-center justify-between pl-3 pr-5 text-white">
      <Link to="/home" className="p-2">
        <img src="/logo.png" alt="logo" className="h-10 w-10" />
      </Link>
      {open ? (
        <div
          onClick={() => {
            setOpen(false)
          }}
        >
          <RxCross2 className="relative z-header-button h-12 w-12 text-white" />
        </div>
      ) : (
        <div
          onClick={() => {
            setOpen(true)
          }}
        >
          <RxHamburgerMenu className="relative z-header-button h-12 w-12 text-main" />
        </div>
      )}
      <div
        className={[
          !open && '-translate-y-full',
          'absolute top-0 left-0 w-full z-header bg-black/80 p-8 transition-all duration-500',
        ].join(' ')}
      >
        <p className="text-xl">かったっけ</p>
        <div className="mt-8 flex flex-col space-y-6">
          <Link
            to="/home"
            className="flex w-fit items-center space-x-2"
            onClick={() => {
              setOpen(false)
            }}
          >
            <HiOutlineHome className="h-6 w-6" />
            <p className="text-lg">ホーム</p>
          </Link>
          <Link
            to="/search"
            className="flex w-fit items-center space-x-2"
            onClick={() => {
              setOpen(false)
            }}
          >
            <HiOutlineSearch className="h-6 w-6" />
            <p className="text-lg">本を検索</p>
          </Link>
          <Link
            to="/register"
            className="flex w-fit items-center space-x-2"
            onClick={() => {
              setOpen(false)
            }}
          >
            <HiOutlinePlus className="h-6 w-6" />
            <p className="text-lg">本を登録</p>
          </Link>
          <Link
            to="/setting"
            className="flex w-fit items-center space-x-2"
            onClick={() => {
              setOpen(false)
            }}
          >
            <HiOutlineCog className="h-6 w-6" />
            <p className="text-lg">設定</p>
          </Link>
          <div className="flex w-fit items-center space-x-2">
            <HiOutlineLogout className="h-6 w-6" color={"#DA1414"} />
            <p className="text-lg">ログアウト</p>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="absolute left-0 top-0 z-overlay h-full w-full"
          onClick={() => {
            setOpen(false)
          }}
        />
      )}
    </div>
  )
}

export default AppHeader
