import { useRef, useEffect } from 'react'

interface IUseInfinitescrollProps {
  onIntersection: () => void
  options?: {
    root: Document | HTMLElement | null
    threshold: number
  }
}

export const useInfiniteObserver = ({
  onIntersection,
  options,
}: IUseInfinitescrollProps) => {
  // Holds reference to the observed element
  const lastElementRef = useRef(null)
  const observerInstance = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const observerOptions = {
      root: options?.root || document,
      threshold: options?.threshold || 0.5,
    }

    const observerCallback = (entries: any[]) => {
      if (entries[0].isIntersecting) {
        onIntersection()
      }
    }

    observerInstance.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    )

    // If element was correctly set up, start observing
    if (lastElementRef.current) {
      observerInstance.current.observe(lastElementRef.current)
    }

    // Remove observer on unmount
    return () => {
      if (observerInstance.current) {
        observerInstance.current.disconnect()
      }
    }
  }, [onIntersection, options])

  return { lastElementRef }
}
