import { PageIcon } from '../../atoms/page/PageIcon'
import { PageSubtitle } from '../../atoms/page/PageSubtitle'
import { PageTitle } from '../../atoms/page/PageTitle'

export const PageHeader = () => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-gray-800 to-transparent" />
      <div className="flex flex-col justify-center gap-4 rounded-lg bg-[url('/images/grid.svg')] px-4 py-24 md:flex-row">
        <div className="flex items-center justify-center">
          <PageIcon />
        </div>
        <div>
          <PageTitle />
          <PageSubtitle />
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent" />
    </div>
  )
}
