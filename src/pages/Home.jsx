import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import About from '../sections/About'
import Certifications from '../sections/Certifications'
import Contact from '../sections/Contact'
import Experience from '../sections/Experience'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import Skills from '../sections/Skills'

const Home = ({ theme, onToggleTheme }) => {
  return (
    <div className="relative z-10">
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
