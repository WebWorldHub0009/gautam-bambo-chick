import React from 'react'
import HeroSection from '../components/Hero'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Product from '../components/ServiceSection'
import HowItWorks from "../components/HowItWork"
import FAQ from '../components/Faq'

const Home = () => {
  return (
   <>
   <HeroSection/>
   <About/>
   <WhyChooseUs/>
   <Product/>
   <HowItWorks/>
   <FAQ/>
   </>
  )
}

export default Home