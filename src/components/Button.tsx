import { type ComponentPropsWithoutRef, type FC, type ReactNode } from 'react'

type Color = 'main' | 'accent'
type Variant = 'solid' | 'outline'

type Props = {
  children?: ReactNode
  color?: Color
  variant?: Variant
  gradation?: boolean
  disabled?: boolean
  loading?: boolean
  className?: string
} & ComponentPropsWithoutRef<'button'>

const Button: FC<Props> = ({
  children,
  color = 'main',
  variant = 'solid',
  gradation = false,
  disabled = false,
  loading = false,
  className,
  ...props
}) => {
  if (gradation) {
    const colorStyle = {
      main: 'from-main to-main/40',
      accent: 'from-accent to-accent/40',
    }
    return (
      <button
        className={[
          'h-20 w-full rounded-full bg-gradient-to-br shadow-lg',
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
          'rounded-lg font-bold h-[36px] w-[140px] disabled:opacity-75',
          colorStyle(color, variant),
          className,
        ].join(' ')}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex justify-center" aria-label="読み込み中">
            <div
              className={[
                'h-6 w-6 mt-1.5 animate-spin rounded-full border-2 border-white border-t-transparent',
                className,
              ].join(' ')}
            ></div>
          </div>
        ) : (
          children
        )}
      </button>
    )
  }
}

export default Button
