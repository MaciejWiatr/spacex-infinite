import { ReactNode } from 'react'

interface IDescriptionProps {
  children: ReactNode
}

export const Description = ({ children }: IDescriptionProps) => {
  return <p className="text-left text-gray-500">{children}</p>
}
