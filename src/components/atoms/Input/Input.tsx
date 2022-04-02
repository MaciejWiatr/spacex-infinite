import { forwardRef, InputHTMLAttributes, LegacyRef } from 'react'

export const Input = forwardRef(
  (
    props: InputHTMLAttributes<HTMLInputElement>,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <input
        {...props}
        ref={ref}
        className="px-4 py-2 text-white bg-gray-700 border-none rounded-lg placeholder:text-gray-500"
      />
    )
  }
)
