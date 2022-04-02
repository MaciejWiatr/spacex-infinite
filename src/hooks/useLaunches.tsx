import { GetLaunchesResp, getSdk } from '@graphql'
import { GQLCient } from '@lib'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'

export const useLaunches = ({ fetchLimit = 10 }) => {
  const [isLoading, setLoading] = useState(false)
  const [launches, setLaunches] = useState<GetLaunchesResp>([])
  const [searchQuery, setSearhQuery] = useState<string>('')
  const [reachedEnd, setReachedEnd] = useState(false)
  const sdk = getSdk(GQLCient)

  const fetchNext = useCallback(
    async (invokedBy: string) => {
      if (reachedEnd || isLoading) return
      console.log(`fetchNext invoked by ${invokedBy}`)

      setLoading(true)

      const { launchesPast: newLaunches } = await sdk.GetLaunches({
        limit: fetchLimit,
        offset: launches?.length,
        search: searchQuery,
      })

      setLoading(false)

      // if there are no more launches, set reachedEnd to true
      if (newLaunches && newLaunches.length <= 0) {
        setReachedEnd(true)
        return
      }

      if (Array.isArray(launches) && Array.isArray(newLaunches)) {
        setLaunches([...launches, ...newLaunches])
      }
    },

    [reachedEnd, isLoading, sdk, fetchLimit, launches, searchQuery]
  )

  const search = async (query: string) => {
    setLaunches([])
    setReachedEnd(false)
    setSearhQuery(query)
  }

  useEffect(() => {
    if (launches?.length === 0) {
      fetchNext('search query change')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, launches?.length])

  return { fetchNext, launches, search, isLoading, reachedEnd }
}
