import { GetLaunchResp, getSdk } from '@graphql'
import { GQLCient } from '@lib'
import { GraphQLClient } from 'graphql-request'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface ILaunchPageProps {
  launch: GetLaunchResp
}

const LaunchPage = ({ launch }: ILaunchPageProps) => {
  return (
    <div>
      <h1>{launch?.mission_name}</h1>
    </div>
  )
}

interface ILaunchPageParams extends ParsedUrlQuery {
  launchId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sdk = getSdk(GQLCient)
  const { launchId } = context.params as ILaunchPageParams
  const resp = await sdk.GetLaunch({ launchId })

  return {
    props: {
      launch: resp.launch,
    },
  }
}

export default LaunchPage
