import Image from 'next/image'

interface IWideImageProps {
  src: any
}

export const WideImage = ({ src }: IWideImageProps) => {
  return (
    <div className="relative object-cover w-full my-2 overflow-hidden transition-all duration-300 rounded-lg h-36 hover:h-64">
      <Image
        className="object-cover"
        src={src}
        layout="fill"
        placeholder="blur"
        blurDataURL="/images/default.png"
        alt="Launch image"
      />
    </div>
  )
}
