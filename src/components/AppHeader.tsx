import React, { useState } from 'react'
import { HiOutlinePlus, HiOutlineSearch } from 'react-icons/hi'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'

const AppHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="h-20 flex items-center justify-between text-white px-5">
      <img src="/logo.png" alt="logo" className="h-10 w-10" />
      {open ? (
        <div onClick={() => setOpen(false)}>
          <RxCross2 className="text-white h-12 w-12 relative z-header-button" />
        </div>
      ) : (
        <div onClick={() => setOpen(true)}>
          <RxHamburgerMenu className="text-main h-12 w-12 relative z-header-button" />
        </div>
      )}
      <div
        className={[
          !open && '-translate-y-full',
          'absolute top-0 left-0 w-full z-header bg-black/80 p-8 transition-all duration-500',
        ].join(' ')}
      >
        <p className="text-xl">かったっけ</p>
        <div className="flex flex-col space-y-6 mt-8">
          <div className="flex items-center space-x-2">
            <HiOutlineSearch className="h-6 w-6" />
            <p className='text-lg'>本を検索</p>
          </div>
          <div className="flex items-center space-x-2">
            <HiOutlinePlus className="h-6 w-6" />
            <p className='text-lg'>本を登録</p>
          </div>
        </div>
      </div>
      {open && (
        <div
          className="absolute top-0 left-0 h-full w-full z-overlay"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  )
}

export default AppHeader
