import { SearchForm } from '@components/molecules/SearchForm'
import { LaunchList } from '@components/organisms/LaunchList'
import { PageHeader } from '@components/molecules/PageHeader'

const HomePage = () => {
  return (
    <div className="bg-gray-800">
      <main className="mx-auto min-h-screen w-full max-w-6xl flex-1 px-5 text-center text-gray-700 md:px-20">
        <PageHeader />
        <SearchForm />
        <LaunchList />
      </main>
    </div>
  )
}

export default HomePage
