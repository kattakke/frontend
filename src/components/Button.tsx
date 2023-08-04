import React, { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

type Props = {
  children?: ReactNode
  color?: 'main' | 'accent'
  gradation?: boolean
  disabled?: boolean
  className?: string
} & ComponentPropsWithoutRef<'button'>

const Button: FC<Props> = ({
  children,
  color = 'main',
  gradation = false,
  disabled = false,
  className,
  ...props
}) => {
  if (gradation) {
    const colorStyle = {
      main: 'from-main to-main/20',
      accent: 'from-accent to-accent/20',
    }
    return (
      <button
        className={[
          'h-20 w-full rounded-full bg-gradient-to-br',
          colorStyle[color],
          className,
        ].join(' ')}
      >
        {children}
      </button>
    )
  } else {
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
}

export default Button
