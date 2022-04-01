import { ReactNode } from 'react'

interface ITtileProps {
  children: ReactNode
}

export const Title = ({ children }: ITtileProps) => {
  return (
    <h3 className="text-xl font-semibold text-left text-white">{children}</h3>
  )
}
