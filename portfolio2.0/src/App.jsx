import AboutSection from './AboutSection';
import './App.css';
import Copyright from './Copyright';
import Hero from './Hero';
import Navbar from './Navbar';
import ProjectSection from './ProjectSection';
import SkillSection from './SkillSection';
import WorkSection from './WorkSection';

function App() {
  return (
    <div className='absolute bg-black top-0 left-0'>
      <Navbar />
      <Hero />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <WorkSection />
      <Copyright />
    </div>
  );
}

export default App;
