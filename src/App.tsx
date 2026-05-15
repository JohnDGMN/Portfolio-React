import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { BackgroundFx } from './components/layout/BackgroundFx'
import { Footer } from './components/layout/Footer'
import { Cursor } from './components/ui/Cursor'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <div className="relative grain min-h-screen bg-[#0a0a0f] text-white">
      <Cursor />
      <ScrollProgress />
      <BackgroundFx />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
