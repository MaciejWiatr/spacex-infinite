/* eslint-disable react/no-unescaped-entities */
import { Footer } from '@components/molecules/Footer'
import { LaunchItem } from '@components/molecules/LaunchItem'
import { LoadingIndicator } from '@components/molecules/LoadingIndicator'
import { useInfiniteObserver } from '@hooks'
import { useLaunchesContext } from '@hooks/useLaunchesContext'

export const LaunchList = () => {
  const { launches, fetchNext, isLoading, reachedEnd } = useLaunchesContext()
  const { lastElementRef } = useInfiniteObserver({ onIntersection: fetchNext })

  return (
    <div className="flex flex-col items-center flex-1 min-h-80vh">
      {launches?.map((launch, idx) => {
        return (
          <LaunchItem
            ref={idx === launches.length - 2 ? lastElementRef : null}
            id={launch?.id}
            key={launch?.mission_name}
            description={launch?.details}
            date={launch?.launch_date_local}
            image={launch?.links?.flickr_images?.[0]}
            title={launch?.mission_name || 'Unnamed launch'}
          />
        )
      })}
      {isLoading && <LoadingIndicator />}
      {reachedEnd && <Footer />}
    </div>
  )
}
