import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
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
          title: 'Card Title' + Math.random(),
          description: 'Card Description',
        },
        {
          title: 'Card Title' + Math.random(),
          description: 'Card Description',
        },
        {
          title: 'Card Title' + Math.random(),
          description: 'Card Description',
        },
        {
          title: 'Card Title' + Math.random(),
          description: 'Card Description',
        },
        {
          title: 'Card Title' + Math.random(),
          description: 'Card Description',
        },
        {
          title: 'Card Title' + Math.random(),
          description: 'Card Description',
        },
        {
          title: 'Card Title' + Math.random(),
          description: 'Card Description',
        },
        {
          title: 'Card Title' + Math.random(),
          description: 'Card Description',
        },
      ])
    }
  }, [intersection?.isIntersecting])

  const [cards, setCards] = useState([
    {
      title: 'Card 1',
      description: 'This is the first card',
    },
    {
      title: 'Card 2',
      description: 'This is the second card',
    },
    {
      title: 'Card 3',
      description: 'This is the third card',
    },
    {
      title: 'Card 4',
      description: 'This is the first card',
    },
    {
      title: 'Card 5',
      description: 'This is the second card',
    },
    {
      title: 'Card 6',
      description: 'This is the third card',
    },
    {
      title: 'Card 7',
      description: 'This is the first card',
    },
    {
      title: 'Card 8',
      description: 'This is the second card',
    },
    {
      title: 'Card 9',
      description: 'This is the third card',
    },
  ])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <PageHeader />
      <main className="flex-1 w-full px-20 text-center text-gray-700 ">
        <div className="flex flex-col flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {cards.map((card, index) => (
            <a
              key={index}
              ref={index === cards.length - 2 ? lastCardRef : undefined}
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="mt-4 text-xl">{card.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
