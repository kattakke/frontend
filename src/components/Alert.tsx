import * as Toast from '@radix-ui/react-toast'
import { type FC, type ReactNode } from 'react'
import {
  HiOutlineCheckCircle,
  HiOutlineExclamation,
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle,
} from 'react-icons/hi'

interface Props {
  variant: 'success' | 'info' | 'warning' | 'error'
  message?: string
  open: boolean
  onOpenChange: (val: boolean) => void
}

const containerStyle: { [key in Props['variant']]: string } = {
  success: 'bg-success/20 text-success border-success/50',
  info: 'bg-info/20 text-info border-info/50',
  warning: 'bg-warning/20 text-warning border-warning/50',
  error: 'bg-error/20 text-error border-error/50',
}

const icon: { [key in Props['variant']]: ReactNode } = {
  success: <HiOutlineCheckCircle className="h-5 w-5" />,
  info: <HiOutlineInformationCircle className="h-5 w-5" />,
  warning: <HiOutlineExclamation className="h-5 w-5" />,
  error: <HiOutlineExclamationCircle className="h-5 w-5" />,
}

const Alert: FC<Props> = ({ variant, message, open, onOpenChange }) => {
  return (
    <div>
      <Toast.Root
        open={open}
        onOpenChange={onOpenChange}
        className="rounded-md"
      >
        <div
          className={[
            containerStyle[variant],
            'rounded-md p-4 flex space-x-2 border',
          ].join(' ')}
        >
          <Toast.Title>{icon[variant]}</Toast.Title>
          <Toast.Description className="text-sm font-bold">
            {message}
          </Toast.Description>
        </div>
      </Toast.Root>
      <Toast.Viewport className="fixed inset-x-0 bottom-0 z-alert m-4 rounded-md bg-white shadow-lg" />
    </div>
  )
}

export default Alert
