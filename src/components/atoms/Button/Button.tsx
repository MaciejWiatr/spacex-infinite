import { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
  onClick?: () => void
}

export const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 font-semibold text-white transition-all bg-gray-700 rounded-lg shadow-lg hover:bg-yellow-500 hover:text-gray-800 hover:shadow-yellow-800"
    >
      {children}
    </button>
  )
}
