import { DEFAULT_IMAGE } from '@constants'
import Image from 'next/image'

interface IArticleImageProps {
  src: string | undefined | null | any
}

export const ArticleImage = ({ src = DEFAULT_IMAGE }: IArticleImageProps) => {
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
