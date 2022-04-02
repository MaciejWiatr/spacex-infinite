import { GetLaunchesResp } from '@graphql'
import { useLaunches } from '@hooks'
import { createContext, ReactNode } from 'react'

export const LaunchesContext = createContext({
  launches: [] as GetLaunchesResp,
  fetchNext: (invokedBy: string) => {},
  search: (query: string) => {},
  isLoading: false,
  reachedEnd: false,
})

interface ILaunchesProviderProps {
  children: ReactNode
}

export const LaunchesProvider = ({ children }: ILaunchesProviderProps) => {
  const launches = useLaunches({ fetchLimit: 10 })
  return (
    <LaunchesContext.Provider value={launches}>
      {children}
    </LaunchesContext.Provider>
  )
}
