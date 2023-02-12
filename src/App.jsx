import DownloadSection from './components/DownloadSection'
import FAQSection from './components/FAQSection'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import TecnologySection from './components/TecnologySection'
import {gsap, Power3} from 'gsap'

function App() {

  const tl = new gsap.timeline()
  const ease = Power3.easeOut()


  return (
    <div className='bg-[#F4F7FF] pt-12'>
      <Navbar timeline={tl} ease={ease}  />
      <Hero timeline={tl} ease={ease} />
      <Partners/>
      <FeatureSection/>
      <TecnologySection/>
      <DownloadSection/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default App
