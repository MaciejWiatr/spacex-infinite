import Image from 'next/image'

interface IWideImageProps {
  src: any
}

export const WideImage = ({ src }: IWideImageProps) => {
  return (
    <div className="relative object-cover w-full my-2 overflow-hidden rounded-lg h-36">
      <Image className="object-cover" src={src} layout="fill" />
    </div>
  )
}
