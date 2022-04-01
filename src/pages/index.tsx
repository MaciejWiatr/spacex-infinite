import { LaunchList } from '@components/organisms/LaunchList'
import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import { useIntersection } from 'react-use'
import { PageHeader } from '../components/molecules/PageHeader'

const Home: NextPage = () => {
  const lastCardRef = useRef(null)
  const intersection = useIntersection(lastCardRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setCards((cards) => [
        ...cards,
        {
          name: 'Card name' + Math.random(),
          details: 'Card details',
        },
        {
          name: 'Card name' + Math.random(),
          details: 'Card details',
        },
        {
          name: 'Card name' + Math.random(),
          details: 'Card details',
        },
        {
          name: 'Card name' + Math.random(),
          details: 'Card details',
        },
        {
          name: 'Card name' + Math.random(),
          details: 'Card details',
        },
        {
          name: 'Card name' + Math.random(),
          details: 'Card details',
        },
        {
          name: 'Card name' + Math.random(),
          details: 'Card details',
        },
        {
          name: 'Card name' + Math.random(),
          details: 'Card details',
        },
      ])
    }
  }, [intersection?.isIntersecting])

  const [cards, setCards] = useState([
    {
      name: 'Card 1',
      details: 'This is the first card',
    },
    {
      name: 'Card 2',
      details: 'This is the second card',
    },
    {
      name: 'Card 3',
      details: 'This is the third card',
    },
    {
      name: 'Card 4',
      details: 'This is the first card',
    },
    {
      name: 'Card 5',
      details: 'This is the second card',
    },
    {
      name: 'Card 6',
      details: 'This is the third card',
    },
    {
      name: 'Card 7',
      details: 'This is the first card',
    },
    {
      name: 'Card 8',
      details: 'This is the second card',
    },
    {
      name: 'Card 9',
      details: 'This is the third card',
    },
  ])

  return (
    <div className="bg-gray-800">
      <main className="flex-1 w-full max-w-6xl px-4 mx-auto text-center text-gray-700 md:px-20 ">
        <PageHeader />
        <LaunchList launches={cards} />
      </main>
    </div>
  )
}

export default Home
