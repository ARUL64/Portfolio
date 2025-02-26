import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollWrapper from './components/ScrollWrapper'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Stats from './components/Stats'
import Projects from './components/Projects'

const Home = () => (
  <>
    <Cursor />
    <ScrollWrapper>
      <AnimatePresence>
        <main data-scroll-section>
          <Hero />
          <TechStack />
          <Stats />
          <Projects />
        </main>
      </AnimatePresence>
    </ScrollWrapper>
  </>
)

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
