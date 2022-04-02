import { LaunchItem } from '@components/molecules/LaunchItem'
import { useInfiniteObserver } from '@hooks'
import { useLaunchesContext } from '@hooks/useLaunchesContext'

export const LaunchList = () => {
  const { launches, fetchNext, isLoading } = useLaunchesContext()
  const { lastElementRef } = useInfiniteObserver({ onIntersection: fetchNext })

  return (
    <div className="flex flex-col items-center flex-1 min-h-80vh">
      {isLoading && <div className="text-center">Loading...</div>}
      {launches?.map((launch, idx) => {
        return (
          <LaunchItem
            ref={idx === launches.length - 1 ? lastElementRef : null}
            id={launch?.id}
            key={launch?.mission_name}
            description={launch?.details}
            date={launch?.launch_date_local}
            image={launch?.links?.flickr_images?.at(0)}
            title={launch?.mission_name || 'Unnamed launch'}
          />
        )
      })}
    </div>
  )
}
