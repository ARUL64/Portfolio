import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isLink, setIsLink] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 25, stiffness: 700 }
  const xSpring = useSpring(cursorX, springConfig)
  const ySpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }
    
    const handleHover = (e) => {
      const target = e.target
      setIsHovering(target.closest('[data-cursor-hover]'))
      setIsLink(target.closest('a, button, [data-cursor-link]'))
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleHover)
    window.addEventListener('mouseout', () => setIsHovering(false))

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleHover)
      window.removeEventListener('mouseout', () => setIsHovering(false))
    }
  }, [])

  return (
    <motion.div
      ref={cursorRef}
      className="fixed left-0 top-0 z-50 pointer-events-none"
      style={{ x: xSpring, y: ySpring }}
    >
      <motion.div
        className="w-8 h-8 border-2 border-purple-500 rounded-full"
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isLink ? '#8b5cf6' : 'transparent',
          borderColor: isLink ? '#8b5cf6' : '#8b5cf6',
          opacity: isHovering ? 0.8 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="absolute inset-0 w-1 h-1 bg-purple-500 rounded-full m-auto"
        animate={{
          scale: isHovering ? 4 : 1,
          opacity: isHovering ? 0 : 1
        }}
      />
    </motion.div>
  )
}
