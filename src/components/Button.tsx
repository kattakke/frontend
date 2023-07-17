import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
  color?: 'main' | 'accent'
  disabled?: boolean
  className?: string
} & ComponentPropsWithoutRef<'button'>

const Button: FC<Props> = ({
  children,
  color = 'main',
  disabled = false,
  className,
  ...props
}) => {
  const colorStyle = {
    main: 'bg-main',
    accent: 'bg-accent',
  }

  return (
    <button
      className={[
        'text-white rounded-lg h-[36px] w-[140px]',
        colorStyle[color],
        className,
      ].join(' ')}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
