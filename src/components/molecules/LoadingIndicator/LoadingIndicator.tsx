import { AccentText } from '@components/atoms/AccentText'
import { DEFAULT_LOADER } from '@constants'
import Image from 'next/image'

export const LoadingIndicator = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-4 font-semibold">
      <Image
        src={DEFAULT_LOADER}
        width={150}
        height={80}
        alt="loading gif"
        className="rounded-lg grayscale"
      />
      <AccentText>Loading...</AccentText>
    </div>
  )
}
