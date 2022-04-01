import { ReactNode } from 'react'

interface ITtileProps {
  children: ReactNode
}

export const Title = ({ children }: ITtileProps) => {
  return <h3>{children}</h3>
}
