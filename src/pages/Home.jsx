import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import Skills from '../sections/Skills'

const Home = ({ theme, onToggleTheme }) => {
  return (
    <div className="relative z-10">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
