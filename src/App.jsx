import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contacts from './pages/Contact'

function App() {

  return (
    <>
    <div className='grid-rows-4'>
      <Home/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </div>
    </>
  )
}

export default App
