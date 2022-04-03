import { Button } from '@components/atoms/Button'
import { PageIcon } from '@components/atoms/page/PageIcon'
import { PageSubtitle } from '@components/atoms/page/PageSubtitle'
import { PageTitle } from '@components/atoms/page/PageTitle'
import { StatusBadge } from '@components/atoms/StatusBadge'
import { GetLaunchResp } from '@graphql'
import { getFormattedLaunchDate } from '@utils'
import Link from 'next/link'

interface ILaunchDetailsProps {
  launch: GetLaunchResp
}

export const LaunchDetails = ({ launch }: ILaunchDetailsProps) => {
  return (
    <main className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col gap-4 px-6 pt-20">
      <div className="absolute left-0 right-0 -top-20 mx-auto h-36 w-36 rounded-full border-4 border-yellow-500 bg-gray-700 p-6 shadow-lg">
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
          <a className="w-full" data-cy="article-link">
            <Button isWide>Read full article</Button>
          </a>
        </Link>
      ) : (
        <div className="text-center text-gray-400">No article available :(</div>
      )}
    </main>
  )
}
