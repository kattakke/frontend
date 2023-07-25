import React, { useState } from 'react'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'

const AppHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="h-20 flex items-center justify-between text-white px-5">
      <img src="/logo.png" alt="logo" className="h-10 w-10" />
      {open ? (
        <div onClick={() => setOpen(false)}>
          <RxCross2 className="text-main h-12 w-12" />
        </div>
      ) : (
        <div onClick={() => setOpen(true)}>
          <RxHamburgerMenu className="text-main h-12 w-12" />
        </div>
      )}
    </div>
  )
}

export default AppHeader
