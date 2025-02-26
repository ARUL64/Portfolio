// Add parallax effect to project cards
import { motion } from 'framer-motion'
import { useRef } from 'react'

export default function ProjectCard({ title, description, image }) {
  const cardRef = useRef(null)
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top } = cardRef.current.getBoundingClientRect()
    const x = (clientX - left) / 5
    const y = (clientY - top) / 5
    cardRef.current.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${-x}deg)`
  }

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-2xl bg-gray-900"
      data-cursor-hover
    >
      {/* ... existing card content ... */}
    </motion.div>
  )
}
