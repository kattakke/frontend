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
  success: 'bg-success/30 text-success',
  info: 'bg-info/30 text-info',
  warning: 'bg-warning/30 text-warning',
  error: 'bg-error/30 text-error',
}

const icon: { [key in Props['variant']]: ReactNode } = {
  success: <HiOutlineCheckCircle className='h-5 w-5' />,
  info: <HiOutlineInformationCircle className='h-5 w-5' />,
  warning: <HiOutlineExclamation className='h-5 w-5' />,
  error: <HiOutlineExclamationCircle className='h-5 w-5' />,
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
          className={[containerStyle[variant], 'rounded-md p-2 flex space-x-2'].join(' ')}
        >
          <Toast.Title>{icon[variant]}</Toast.Title>
          <Toast.Description className='text-sm font-bold'>{message}</Toast.Description>
        </div>
      </Toast.Root>
      <Toast.Viewport className="fixed inset-x-0 bottom-0 z-alert p-4" />
    </div>
  )
}

export default Alert
