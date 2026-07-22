import { useState } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HeroSlider from './components/HeroSlider'
import FeaturedSolutions from './components/FeaturedSolutions'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import FunFacts from './components/FunFacts'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import TeamSection from './components/TeamSection'
import FAQ from './components/FAQ'
import Partners from './components/Partners'
import FreeTrial from './components/FreeTrial'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Preloader />
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <HeroSlider />
      <FeaturedSolutions />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <FunFacts />
      <Testimonials />
      <Pricing />
      <TeamSection />
      <FAQ />
      <Partners />
      <FreeTrial />
      <BlogSection />
      <Footer />
    </>
  )
}
