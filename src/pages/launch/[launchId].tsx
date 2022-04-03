import { LaunchDetails } from '@components/organisms/LaunchDetails'
import { LaunchHeader } from '@components/organisms/LaunchHeader'
import { GetLaunchResp, gqClient } from '@graphql'
import { GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface ILaunchPageProps {
  launch: GetLaunchResp
}

const LaunchPage = ({ launch }: ILaunchPageProps) => {
  return (
    <div className="relative">
      <LaunchHeader launch={launch} />
      <LaunchDetails launch={launch} />
    </div>
  )
}

interface ILaunchPageParams extends ParsedUrlQuery {
  launchId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { launchId } = context.params as ILaunchPageParams
  const resp = await gqClient.GetLaunch({ launchId })

  return {
    props: {
      launch: resp.launch,
    },
  }
}

export default LaunchPage
