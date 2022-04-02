/* eslint-disable react/no-unescaped-entities */
import { AccentText } from '@components/atoms/AccentText'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="flex flex-col p-8 text-center">
      <AccentText>That's all folks!</AccentText>
      <Link href="https://github.com/MaciejWiatr">
        <a className="transition-all hover:font-semibold hover:text-blue-500">
          This website was created by: Maciej Wiatr
        </a>
      </Link>
      <a
        className="transition-all hover:font-bold hover:text-red-400"
        href="mailto:maciej.wiatr00@gmail.com?subject=You%20got%20the%20job!&body=Hi%20Maciej%2C%0D%0A%0D%0Awe%20really%20loved%20the%20effort%20you%20put%20into%20our%20task%2C%20and%20because%20of%20that%2C%20We'd%20like%20to%20offer%20you%20a%20full-time%20position%20as%20a%20software%20developer! "
      >
        Let him know that you liked it! 🤠
      </a>
    </div>
  )
}
