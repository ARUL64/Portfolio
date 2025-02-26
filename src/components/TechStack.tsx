import { motion } from 'framer-motion'

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Framer Motion', icon: '🎭' },
  { name: 'Tailwind CSS', icon: '🎨' },
]

export default function TechStack() {
  return (
    <div className="bg-black/90 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
          <p className="text-gray-400">Powered by cutting-edge technologies</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-colors"
            >
              <span className="text-4xl mb-2">{tech.icon}</span>
              <span className="text-white font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
