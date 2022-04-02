import Image from 'next/image'

interface IIconProps {
  src: string | any
}

export const Icon = ({ src }: IIconProps) => {
  return <Image src={src} width={20} height={20} alt="icon" />
}
