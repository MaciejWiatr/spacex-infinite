import { SearchForm } from '@components/molecules/SearchForm'
import { LaunchList } from '@components/organisms/LaunchList'
import type { NextPage } from 'next'
import { PageHeader } from '../components/molecules/PageHeader'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-800">
      <main className="flex-1 w-full max-w-6xl min-h-screen px-5 mx-auto text-center text-gray-700 md:px-20">
        <PageHeader />
        <SearchForm />
        <LaunchList />
      </main>
    </div>
  )
}

export default Home
