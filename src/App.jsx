import {useEffect, useState} from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import NavigationBar from "./components/NavigationBar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ChatWidget from "./components/ChatWidget"

const App = () => {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    AOS.refresh()
  },  [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');

  };



  return (
    <div className= {
      darkMode
      ? 'bg-linear-to-br from-brand-night via-brand-night-2 to-brand-night min-h-screen'
      : 'bg-linear-to-br from-brand-cream to-brand-sky min-h-screen'
    }>
      <NavigationBar darkMode = {darkMode} toggleDarkMode = {toggleDarkMode}/>
      <Hero darkMode = {darkMode} />
      <About darkMode = {darkMode} />
      <Skills darkMode = {darkMode} />
      <Services darkMode = {darkMode} />
      <Projects darkMode = {darkMode} />
      <Contact darkMode = {darkMode} />
      <Footer darkMode = {darkMode} />
      <ChatWidget darkMode = {darkMode} />

    </div>
  )
}

export default App