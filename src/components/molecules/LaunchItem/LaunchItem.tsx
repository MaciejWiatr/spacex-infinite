/* eslint-disable react/display-name */
import { AccentText } from '@components/atoms/AccentText'
import { Button } from '@components/atoms/Button'
import { Description } from '@components/atoms/Description'
import { Icon } from '@components/atoms/Icon'
import { Title } from '@components/atoms/Title'
import { ArticleImage } from '@components/atoms/ArticleImage'
import { getFormattedLaunchDate, textLimit } from '@utils'
import Link from 'next/link'
import { forwardRef, LegacyRef } from 'react'

interface ILaunchItem {
  title: string
  description: any
  image: string | null | undefined
  id: string | null | undefined
  date: any
}

export const LaunchItem = forwardRef(
  (
    { description, image, title, id, date }: ILaunchItem,
    ref: LegacyRef<HTMLDivElement>
  ) => {
    const formattedDate = getFormattedLaunchDate(date)
    const limitedDescription = textLimit(description)

    return (
      <div
        ref={ref}
        className="relative w-[80%] border-l-2 border-l-gray-600 py-12 pl-12 text-left"
        data-cy={`item-${id}`}
      >
        <div className="absolute flex items-center justify-center w-8 h-8 my-auto bg-white rounded-full -left-4">
          <Icon src={'/images/rocket-icon.png'} />
        </div>
        <div>
          <Title>{title}</Title>
          <AccentText>{formattedDate}</AccentText>
          <Description>{limitedDescription}</Description>
        </div>
        <ArticleImage src={image} />
        <Link href={`launch/${id}`} passHref>
          <a>
            <Button>Read more</Button>
          </a>
        </Link>
      </div>
    )
  }
)
