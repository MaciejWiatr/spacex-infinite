import { Button } from '@components/atoms/Button'
import { DEFAULT_IMAGE } from '@constants'
import Link from 'next/link'
import Image from 'next/image'
import { GetLaunchResp } from '@graphql'

interface ILaunchHeaderProps {
  launch: GetLaunchResp
}

export const LaunchHeader = ({ launch }: ILaunchHeaderProps) => {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-b-lg object-cover">
      <Image
        src={launch?.links?.flickr_images?.[0] || DEFAULT_IMAGE}
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
  )
}
