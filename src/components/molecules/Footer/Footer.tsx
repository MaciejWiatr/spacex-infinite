/* eslint-disable react/no-unescaped-entities */
import { AccentText } from '@components/atoms/AccentText'
import { Button } from '@components/atoms/Button'
import { Icon } from '@components/atoms/Icon'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="flex flex-col gap-2 p-8 text-center">
      <AccentText>That's all folks!</AccentText>
      <Link href="https://github.com/MaciejWiatr">
        <a className="transition-all hover:font-semibold hover:text-blue-500">
          This website was created by: Maciej Wiatr
        </a>
      </Link>
      <a href="mailto:maciej.wiatr00@gmail.com?subject=You%20got%20the%20job!&body=Hi%20Maciej%2C%0D%0A%0D%0Awe%20really%20loved%20the%20effort%20you%20put%20into%20spacex%20app%2C%20and%20because%20of%20that%2C%20We'd%20like%20to%20offer%20you%20a%20full-time%20position%20as%20a%20software%20developer! ">
        <Button isWide isSmall>
          Let me know that you liked it! <Icon src="/images/cowboy.png" />
        </Button>
      </a>
    </div>
  )
}
