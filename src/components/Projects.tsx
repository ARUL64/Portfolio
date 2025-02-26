import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'AI-Powered Platform',
    description: 'Next-gen machine learning interface with real-time analytics',
    image: 'https://source.unsplash.com/random/800x600?tech'
  },
  {
    title: 'E-Commerce Solution',
    description: 'Modern shopping experience with AR integration',
    image: 'https://source.unsplash.com/random/800x600?ecommerce'
  },
  {
    title: 'Social Network',
    description: 'Community-driven platform with live interactions',
    image: 'https://source.unsplash.com/random/800x600?social'
  }
]

export default function Projects() {
  return (
    <section className="py-20" data-scroll-section>
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-white">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
