// Update buttons to use MagneticButton
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* ... existing video background ... */}
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div className="space-y-6">
          {/* ... existing headings ... */}
          <div className="flex gap-4 justify-center">
            <MagneticButton className="text-white">
              View Projects
            </MagneticButton>
            <MagneticButton className="border-2 border-white text-white">
              Contact Me
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
