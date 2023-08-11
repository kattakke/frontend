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
    const colorStyle = (color: Color, variant: Variant): string => {
      const style = {
        solid: { main: 'bg-main text-white', accent: 'bg-accent text-white' },
        outline: {
          main: 'border-main text-main bg-white/80 border-[3px]',
          accent: 'border-accent text-accent bg-white/80 border-[3px]',
        },
      }
      return style[variant][color]
    }
    return (
      <button
        className={[
          'rounded-lg font-bold h-[36px] w-[140px]',
          colorStyle(color, variant),
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
