import { DEFAULT_ICON } from '@constants'
import Image from 'next/image'

interface IPageIconProps {
  src?: string | any
}

export const PageIcon = ({ src = DEFAULT_ICON }: IPageIconProps) => {
  return <Image src={src} width={80} height={80} alt="page icon" />
}
