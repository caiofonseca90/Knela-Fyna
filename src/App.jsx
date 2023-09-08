import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Card from './components/Cards/Card'
import Contact from './components/Contact/Contact'

function App() {
  
  return (
    <div className='flex flex-col gap-11 ' >
      <Header />
      <About />
      <Card />
      <Contact />
    </div>
  )
}

export default App
