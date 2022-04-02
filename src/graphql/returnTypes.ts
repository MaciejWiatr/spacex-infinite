import { GetLaunchesQuery, GetLaunchQuery } from './generated'

export type GetLaunchesResp = GetLaunchesQuery['launchesPast']
export type GetLaunchResp = GetLaunchQuery['launch']
