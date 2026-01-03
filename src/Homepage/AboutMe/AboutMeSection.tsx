//import ServiceCard from "../../components/ServiceCard"
import ServiceCard from "../../components/ServiceCard"
import Title from "../../components/Title"
import { services } from "../../data/services"
//import icons from '../../assets/icons8-twitter-50.png'
import { motion } from 'framer-motion'


function AboutMeSection() {
  return (
    <div className="bg-[var(--navbar-bg)] text-white flex justify-center pb-[100px]" id='about'>
      <section className="relative pt-[100px] max-w-[1350px]">
        <div className="px-[30px] sm:px-[90px] md:px-[120px] xl:px-[200px] w-full">
          <Title title="About Me" align="left"/>

          <div>
            <p className="text-center sm:text-left max-sm:text-[12px] font-light">
              I am a Computer Science student at Federal University of Agriculture, Abeokuta  with over 1 year plus of experience as a Frontend Web Developer. I blend technical expertise with security knowledge to craft well-rounded web applications. I am looking to join a company that values innovation, collaboration, and continuous learning and I'm confident that my enthusiasm and drive will help me succeed in any role that leverages my passion for technology. Outside of coding, I am a Melomaniac and a Forex Trader. I continuously seek to enhance my skills and stay updated with the latest industry technologies.
              <span className="block">Here are the languages I was taught in school :</span>
            </p>
          </div>

          <div className="mt-5 flex justify-between sm:justify-center flex-wrap gap-4 sm:gap-7 lg:gap-10 w-full">
            {services.map((service, index) => (
            <ServiceCard src={service.imageSrc} progLang={service.langName} key={index}/>
            ))}
          </div>
        </div>

        <div className="absolute mt-3 w-full flex justify-center items-center">
          <a href="#experience" className=''>
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>  
      </section>
    </div>
  )
}

export default AboutMeSection
