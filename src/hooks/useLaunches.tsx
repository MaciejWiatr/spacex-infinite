import { GetLaunchesResp, gqClient } from '@graphql'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'

export const useLaunches = ({ fetchLimit = 10 }) => {
  const [isLoading, setLoading] = useState(false)
  const [launches, setLaunches] = useState<GetLaunchesResp>([])
  const [searchQuery, setSearhQuery] = useState<string>('')
  const [reachedEnd, setReachedEnd] = useState(false)

  const fetchNext = useCallback(async () => {
    // Avoid unnescessary fetches
    if (reachedEnd || isLoading) return

    setLoading(true)

    const { launchesPast: newLaunches } = await gqClient.GetLaunches({
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
  }, [reachedEnd, isLoading, fetchLimit, launches, searchQuery])

  const resetState = useCallback(() => {
    setLaunches([])
    setReachedEnd(false)
  }, [])

  const search = async (query: string) => {
    resetState()
    setSearhQuery(query)
  }

  useEffect(() => {
    // fetch first batch of launches
    if (launches?.length === 0) {
      fetchNext()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, launches?.length])

  return { fetchNext, launches, search, isLoading, reachedEnd }
}
