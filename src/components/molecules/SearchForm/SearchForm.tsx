import { Input } from '@components/atoms/Input'
import { useLaunchesContext } from '@hooks/useLaunchesContext'
import { FormEvent, useRef } from 'react'

export const SearchForm = () => {
  const { search } = useLaunchesContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputRef.current) return

    search(inputRef.current.value)
  }

  return (
    <form onSubmit={onSubmit} className="mb-4 flex justify-center py-4">
      <Input ref={inputRef} placeholder="Search by mission name" />
    </form>
  )
}
