import NavBar from '../src/components/NavBar'
import FeactureSection from './components/FeactureSection'
import HeroSection from './components/HeroSection'
import Pricing from './components/Pricing'
import WorkFlow from './components/WorkFlow'

function App() {
  return (
    <>
      <NavBar />
      <section className='mx-auto max-w-7xl px-6 pt-20'>
        <HeroSection />
        <FeactureSection />
        <WorkFlow />
        <Pricing />
      </section>
    </>
  )
}

export default App
