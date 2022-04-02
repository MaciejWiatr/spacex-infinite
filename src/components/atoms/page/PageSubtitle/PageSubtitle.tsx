import { ReactNode } from 'react'

interface IPageSubtitleProps {
  children: ReactNode
}

export const PageSubtitle = ({ children }: IPageSubtitleProps) => {
  return <h2 className="my-2 font-semibold text-yellow-500">{children}</h2>
}
