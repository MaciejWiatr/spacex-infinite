import { ButtonHTMLAttributes, ReactNode } from 'react'
import cls from 'clsx'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: () => void
  isWide?: boolean
  isSmall?: boolean
}

export const Button = ({
  children,
  onClick,
  isWide,
  isSmall,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cls(
        'rounded-lg bg-gray-700 px-4 py-2 font-semibold text-white shadow-lg transition-all hover:bg-yellow-500 hover:text-gray-800 hover:shadow-yellow-800',
        { 'w-full': isWide, 'px-2 py-1 text-sm': isSmall }
      )}
    >
      {children}
    </button>
  )
}
