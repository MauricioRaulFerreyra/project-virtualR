import NavBar from '../src/components/NavBar'
import FeactureSection from './components/FeactureSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
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
        <Testimonials />
        <Footer />
      </section>
    </>
  )
}

export default App
