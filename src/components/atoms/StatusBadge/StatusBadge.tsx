import cls from 'clsx'
import { ReactNode } from 'react'

interface IStatusBadgeProps {
  status: boolean | null | undefined
  children: ReactNode
}

export const StatusBadge = ({ status, children }: IStatusBadgeProps) => {
  return (
    <div
      data-cy="status-badge"
      className={cls(
        'w-max rounded-full border py-2 px-3 font-semibold text-white',
        {
          'border-green-500 text-green-500': status,
          'border-red-500 text-red-500': !status,
        }
      )}
    >
      {children}
    </div>
  )
}
