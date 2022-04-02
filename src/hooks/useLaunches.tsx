import { GetLaunchesResp, getSdk } from '@graphql'
import { GraphQLClient } from 'graphql-request'
import { useEffect } from 'react'
import { useState } from 'react'

export const useLaunches = ({ fetchLimit = 10 }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [launches, setLaunches] = useState<GetLaunchesResp>([])
  const [searchQuery, setSearhQuery] = useState<string>('')
  const client = new GraphQLClient('https://api.spacex.land/graphql/')
  const sdk = getSdk(client)

  const fetchNext = async () => {
    setIsLoading(true)
    const { launchesPast } = await sdk.GetLaunches({
      limit: fetchLimit,
      offset: launches?.length || 0,
      search: searchQuery,
    })
    setIsLoading(false)
    if (!launchesPast) return
    setLaunches((prev) => [...(prev || []), ...launchesPast])
  }

  const search = (query: string) => {
    setLaunches([])
    setSearhQuery(query)
  }

  useEffect(() => {
    fetchNext()
  }, [searchQuery])

  return { fetchNext, launches, search, isLoading }
}
