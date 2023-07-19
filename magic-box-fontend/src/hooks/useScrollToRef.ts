import { RefObject, useRef } from 'react'
type ScrollToRef = () => void
type UseScrollToRef = () => [RefObject<HTMLDivElement>, ScrollToRef]
export const useScrollToRef: UseScrollToRef = () => {
  const ref = useRef<HTMLDivElement>(null)
  const scrollToRef: ScrollToRef = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }
  return [ref, scrollToRef]
}
