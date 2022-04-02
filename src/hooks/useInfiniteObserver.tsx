import { useRef, useEffect } from 'react'

interface IUseInfinitescrollProps {
  onIntersection: () => void
}

export const useInfiniteObserver = ({
  onIntersection,
}: IUseInfinitescrollProps) => {
  const lastElementRef = useRef(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const options = {
      root: document,
      threshold: 0.5,
    }
    const callback = (entries: any[]) => {
      if (entries[0].isIntersecting) {
        onIntersection()
      }
    }
    observer.current = new IntersectionObserver(callback, options)
    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current)
    }
    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [onIntersection])

  return { lastElementRef }
}
