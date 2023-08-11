import { type ComponentPropsWithoutRef, type FC, type ReactNode } from 'react'

type Color = 'main' | 'accent'
type Variant = 'solid' | 'outline'

type Props = {
  children?: ReactNode
  color?: Color
  variant?: Variant
  gradation?: boolean
  disabled?: boolean
  className?: string
} & ComponentPropsWithoutRef<'button'>

const constructColorStyle = (color: Color, variant: Variant): string[] => {
  return [
    { solid: `bg-${color}`, outline: `border-${color}` }[variant],
    ...{
      solid: ['text-white'],
      outline: [`text-${color}`, 'bg-white/80', 'border-[3px]'],
    }[variant],
  ]
}

const Button: FC<Props> = ({
  children,
  color = 'main',
  variant = 'solid',
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
    return (
      <button
        className={[
          'rounded-lg font-bold h-[36px] w-[140px] transition duration-700 active:duration-0 active:bg-[#6eb9f7]',
          ...constructColorStyle(color, variant),
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
