import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Card from './components/Cards/Card'





function App() {
  
  return (
    <div className=''>
      {/* <div className=' h-[100%} fixed z-[-99] '>
        <img className="opacity-80 h-[100vh] w-screen" src="../src/assets/img/moto.png" alt="logo-KnelaFyna"  />
      </div>
       */}
      <Header/>
      <About />
      <Card />
      
    </div>
  )
}

export default App
