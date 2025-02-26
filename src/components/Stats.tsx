import { motion } from 'framer-motion'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support' },
]

export default function Stats() {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-pink-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
