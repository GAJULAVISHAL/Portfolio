
import './App.css'
import Contact from './components/ContactMe'
import { Hero } from './components/Hero'
import { NavBar } from './components/Nav'
import Projects from './components/Projects'
import SkillsSection from './components/skills'


function App() {

  return (
    <>
      <div className="grid min-h-screen bg-[url('https://res.cloudinary.com/duqbf6np3/image/upload/v1742562319/background_img_mkdvsu.png')] bg-cover bg-center bg-no-repeat text-foreground relative">
        <NavBar/>
        <main className="flex flex-col gap-6 container mx-auto px-4 md:px-6 lg:px-8 pb-16">
          <section id="home" className="min-h-screen flex items-center">
            <Hero />
          </section>
          <section id="projects" className=" md:px-14 lg:px-28 ">
            <Projects/>
          </section>
          <section id="skills" className='md:px-14 lg:px-28'>
            <SkillsSection />
          </section>  
          <section id="contact">
            <Contact />
          </section>  
        </main>
      </div>
    </>
  )
}

export default App
