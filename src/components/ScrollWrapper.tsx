import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export default function ScrollWrapper({ children }) {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true }
    })

    return () => scroll.destroy()
  }, [])

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}
