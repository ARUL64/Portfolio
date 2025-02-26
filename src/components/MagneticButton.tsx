import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function MagneticButton({ children, ...props }) {
  const ref = useRef(null)
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width/2)
    const y = clientY - (top + height/2)
    ref.current.style.transform = `translate(${x*0.15}px, ${y*0.15}px)`
  }

  const handleMouseLeave = () => {
    ref.current.style.transform = 'translate(0, 0)'
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-full px-8 py-3 font-semibold"
      data-cursor-hover
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
