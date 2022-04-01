import { Button } from '@components/atoms/Button'
import { Description } from '@components/atoms/Description'
import { Icon } from '@components/atoms/Icon'
import { Title } from '@components/atoms/Title'
import { WideImage } from '@components/atoms/WideImage'
import { forwardRef, LegacyRef } from 'react'

interface ILaunchItem {
  title: string
  description: any
  image: string
}

export const LaunchItem = forwardRef(
  (
    { description, image, title }: ILaunchItem,
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div
        ref={ref}
        className="relative w-[80%] border-l-2 border-l-gray-600 py-12 pl-12 text-left"
      >
        <div className="absolute flex items-center justify-center w-8 h-8 my-auto bg-white rounded-full -left-4">
          <Icon src={'/images/rocket-icon.png'} />
        </div>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <WideImage src={image} />
        <Button>Read more</Button>
      </div>
    )
  }
)
