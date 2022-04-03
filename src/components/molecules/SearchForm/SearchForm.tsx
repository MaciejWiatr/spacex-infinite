import { Input } from '@components/atoms/Input'
import { useLaunchesContext } from '@hooks/useLaunchesContext'
import { FormEvent, useRef } from 'react'

export const SearchForm = () => {
  const { search } = useLaunchesContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputRef.current) return

    search(inputRef.current.value.toString())
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center py-4 mb-4">
      <Input
        ref={inputRef}
        pattern="[a-zA-Z0-9 ]+"
        placeholder="Search by mission name"
      />
      <p className="block mt-1 text-sm">Special characters are not supported</p>
    </form>
  )
}
