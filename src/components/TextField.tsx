import { type ComponentPropsWithoutRef, type FC } from 'react'

type Props = {
  color?: 'main' | 'accent'
  className?: string
} & ComponentPropsWithoutRef<'input'>

const TextField: FC<Props> = ({ color = 'main', className, ...props }) => {
  const colorStyle = {
    main: 'focus:border-main',
    accent: 'focus:border-accent',
  }

  return (
    <input
      type="text"
      className={[
        'border-2 border-gray rounded-lg py-1 px-2 outline-none',
        colorStyle[color],
        className,
      ].join(' ')}
      {...props}
    />
  )
}

export default TextField
