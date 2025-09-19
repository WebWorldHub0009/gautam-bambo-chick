import React from 'react'
import HeroAbout from "../components/HeroAbout"
import FeaturedSection from '../components/FeaturedSection'
import StatsSection from '../components/StatsCounter'
import Testimonials from "../components/Testimonials"
import VisionMission from '../components/VissionMission'
import OurTeam from '../components/OurTeam'

const About = () => {
  return (
   <>
   <HeroAbout/>
   <FeaturedSection/>
   <StatsSection/>
   <VisionMission/>
   <OurTeam/>
   <Testimonials/>

   </>
  )
}

export default About