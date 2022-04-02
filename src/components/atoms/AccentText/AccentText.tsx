import { ReactNode } from 'react'

interface IAccentTextProps {
  children: ReactNode
}

export const AccentText = ({ children }: IAccentTextProps) => {
  return <p className="text-yellow-500">{children}</p>
}
