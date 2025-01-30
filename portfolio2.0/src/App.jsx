import AboutSection from './AboutSection'
import './App.css'
import Contacts from './Contacts'
import Hero from './Hero'
import Navbar from './Navbar'
import ProjectSection from './ProjectSection'
import SkillSection from './SkillSection'

function App() {

  return (
    <div className="absolute bg-black w-screen h-screen top-0 left-0">
      <Navbar/>
      <Contacts/>
      <Hero/>
      <AboutSection/>
      <SkillSection/>
      <ProjectSection/>
    </div>
  )
}

export default App
