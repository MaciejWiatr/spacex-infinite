import { LaunchItem } from '@components/molecules/LaunchItem'
import { useRef } from 'react'
import { useIntersection } from 'react-use'

interface ILaunchList {
  launches: any[]
}

export const LaunchList = ({ launches }: ILaunchList) => {
  const lastCardRef = useRef(null)
  const intersection = useIntersection(lastCardRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  return (
    <div className="flex flex-col items-center flex-1">
      {launches.map((launch: any, idx) => {
        return (
          <LaunchItem
            key={launch.name}
            description={launch.details}
            image={'/images/default.jpg'}
            title={launch.name}
          />
        )
      })}
    </div>
  )
}
