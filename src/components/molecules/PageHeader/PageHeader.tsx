/* eslint-disable react/no-unescaped-entities */
import { PageIcon } from '@components/atoms/page/PageIcon'
import { PageSubtitle } from '@components/atoms/page/PageSubtitle'
import { PageTitle } from '@components/atoms/page/PageTitle'

export const PageHeader = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 h-24 w-full bg-gradient-to-b from-gray-800 to-transparent" />
      <div className="flex flex-col justify-center gap-4 rounded-lg bg-[url('/images/grid.svg')] px-4 py-24 md:flex-row">
        <div className="flex items-center justify-center">
          <PageIcon />
        </div>
        <div className="text-center md:text-left">
          <PageTitle>SpaceX Launches</PageTitle>
          <PageSubtitle>
            A (super)non official platform for SpaceX's data!
          </PageSubtitle>
        </div>
      </div>
      <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-gray-800 to-transparent" />
    </div>
  )
}
