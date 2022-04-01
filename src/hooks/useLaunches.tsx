import { GetLaunchesResp, getSdk } from '@graphql'
import { GraphQLClient } from 'graphql-request'
import { useState } from 'react'

export const useLaunches = ({ fetchLimit = 10 }) => {
  const [launches, setLaunches] = useState<GetLaunchesResp>([])
  const client = new GraphQLClient('https://api.spacex.land/graphql/')
  const sdk = getSdk(client)

  const fetchNext = async () => {
    console.log('fetching')
    const { launchesPast } = await sdk.GetLaunches({
      limit: fetchLimit,
      offset: launches?.length ?? 0,
    })

    if (!launchesPast) return

    setLaunches((prev) => [...(prev || []), ...launchesPast])

    console.log('launches', launches)
  }

  return { fetchNext, launches }
}
