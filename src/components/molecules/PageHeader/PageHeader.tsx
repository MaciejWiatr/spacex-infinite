import { PageIcon } from '../../atoms/page/PageIcon'
import { PageSubtitle } from '../../atoms/page/PageSubtitle'
import { PageTitle } from '../../atoms/page/PageTitle'

export const PageHeader = () => {
  return (
    <div className="flex flex-col gap-4 px-4 py-24 rounded-lg md:flex-row">
      <div className="flex items-center">
        <PageIcon />
      </div>
      <div>
        <PageTitle />
        <PageSubtitle />
      </div>
    </div>
  )
}
