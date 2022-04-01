import { LaunchItem } from '@components/molecules/LaunchItem'
import { useInfiniteObserver, useLaunches } from '@hooks'
import { useEffect } from 'react'

export const LaunchList = () => {
  const { launches, fetchNext } = useLaunches({ fetchLimit: 10 })
  const { lastElementRef } = useInfiniteObserver({ onIntersection: fetchNext })

  useEffect(() => {
    if (!launches?.length) {
      fetchNext()
    }
  }, [])

  return (
    <div className="flex min-h-[100%] flex-1 flex-col items-center">
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
