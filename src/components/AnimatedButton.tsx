import { motion } from 'framer-motion'

export default function AnimatedButton({ children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="relative overflow-hidden rounded-full px-8 py-3 font-semibold"
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
