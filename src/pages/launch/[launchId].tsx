import { Button } from '@components/atoms/Button'
import { PageIcon } from '@components/atoms/page/PageIcon'
import { PageSubtitle } from '@components/atoms/page/PageSubtitle'
import { PageTitle } from '@components/atoms/page/PageTitle'
import { StatusBadge } from '@components/atoms/StatusBadge'
import { DEFAULT_IMAGE } from '@constants'
import { GetLaunchResp, getSdk } from '@graphql'
import { GQLCient } from '@lib'
import { getFormattedLaunchDate } from '@utils'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ParsedUrlQuery } from 'querystring'

interface ILaunchPageProps {
  launch: GetLaunchResp
}

const LaunchPage = ({ launch }: ILaunchPageProps) => {
  return (
    <div className="relative">
      <div className="relative object-cover w-full h-48 overflow-hidden rounded-b-lg">
        <Image
          src={launch?.links?.flickr_images?.at(0) || DEFAULT_IMAGE}
          layout="fill"
          alt={`Launch ${launch?.mission_name} image`}
          className={'object-cover'}
        />
        <div className="absolute top-2 left-2">
          <Link href="/">
            <a>
              <Button>Go back</Button>
            </a>
          </Link>
        </div>
      </div>
      <main className="relative flex flex-col flex-1 w-full max-w-2xl gap-4 px-6 pt-20 mx-auto">
        <div className="absolute left-0 right-0 p-6 mx-auto bg-gray-700 border-4 border-yellow-500 rounded-full shadow-lg -top-20 h-36 w-36">
          <PageIcon />
        </div>
        <div className="flex flex-col items-center text-center">
          <PageTitle>{launch?.mission_name}</PageTitle>
          <PageSubtitle>
            {launch?.rocket?.rocket_name} -{' '}
            {getFormattedLaunchDate(launch?.launch_date_local)}
          </PageSubtitle>
          <StatusBadge status={launch?.launch_success}>
            {launch?.launch_success ? 'Successful 🛰' : 'Failed 😥'}
          </StatusBadge>
        </div>
        <div className="text-gray-400">{launch?.details}</div>

        {launch?.links?.article_link ? (
          <Link href={launch?.links?.article_link || '/'}>
            <a className="w-full">
              <Button isWide>Read full article</Button>
            </a>
          </Link>
        ) : (
          <div className="text-center text-gray-400">
            No article available :(
          </div>
        )}
      </main>
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
