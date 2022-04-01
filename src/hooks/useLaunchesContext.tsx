import { LaunchesContext } from '@providers/LaunchesProvider'
import { useContext } from 'react'

export const useLaunchesContext = () => useContext(LaunchesContext)
