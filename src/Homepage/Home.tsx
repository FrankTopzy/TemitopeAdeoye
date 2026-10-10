import HeroSection from './HeroSection/HeroSection'
import AboutMeSection from './AboutMe/AboutMeSection'
import Projects from './Projects/Projects'
import Experience from './WorkExperience/Experience'
import ContactMe from './Contact/ContactMe'
import { motion } from 'framer-motion'
import { sectionVariant, viewport } from '../../motion'

function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div variants={sectionVariant as any} viewport={viewport}>
        <HeroSection/>
      </motion.div>
      <motion.div variants={sectionVariant as any} whileInView="show" initial="hidden" viewport={viewport}>
        <AboutMeSection/>
      </motion.div>
      <motion.div variants={sectionVariant as any} whileInView="show" initial="hidden" viewport={viewport}>
        <Experience/>
      </motion.div>
      <motion.div variants={sectionVariant as any} whileInView="show" initial="hidden" viewport={viewport}>
        <Projects/>
      </motion.div>
      <motion.div variants={sectionVariant as any} whileInView="show" initial="hidden" viewport={viewport}>
        <ContactMe/>
      </motion.div>
    </motion.main>
  )
}

export default Home
