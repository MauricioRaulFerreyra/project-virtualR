import NavBar from '../src/components/NavBar'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <>
      <NavBar />
      <section className='mx-auto max-w-7xl px-6 pt-20'>
        <HeroSection />
      </section>
    </>
  )
}

export default App
