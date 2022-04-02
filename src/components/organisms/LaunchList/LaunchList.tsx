import { LaunchItem } from '@components/molecules/LaunchItem'
import { useInfiniteObserver } from '@hooks'
import { useLaunchesContext } from '@hooks/useLaunchesContext'
import { useEffect } from 'react'

export const LaunchList = () => {
  const { launches, fetchNext, isLoading } = useLaunchesContext()
  const { lastElementRef } = useInfiniteObserver({ onIntersection: fetchNext })

  useEffect(() => {
    if (!launches?.length) {
      fetchNext()
    }
  }, [])

  return (
    <div className="flex flex-col items-center flex-1 min-h-80vh">
      {launches?.map((launch, idx) => {
        return (
          <LaunchItem
            ref={idx === launches.length - 3 ? lastElementRef : null}
            key={launch?.mission_name}
            description={launch?.details}
            image={launch?.links?.flickr_images?.at(0) || '/images/default.jpg'}
            title={launch?.mission_name || 'Unnamed launch'}
          />
        )
      })}
    </div>
  )
}
