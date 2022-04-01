import { LaunchList } from '@components/organisms/LaunchList'
import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { useIntersection } from 'react-use'
import { PageHeader } from '../components/molecules/PageHeader'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-800">
      <main className="flex-1 w-full max-w-6xl px-5 mx-auto text-center text-gray-700 md:px-20 ">
        <PageHeader />
        <LaunchList />
      </main>
    </div>
  )
}

export default Home
