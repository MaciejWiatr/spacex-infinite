import { ReactNode } from 'react'

interface IPageTitleProps {
  children: ReactNode
}

export const PageTitle = ({ children }: IPageTitleProps) => {
  return (
    <h1
      data-cy="page-title"
      className="text-5xl font-black text-gray-100 md:text-6xl"
    >
      {children}
    </h1>
  )
}
