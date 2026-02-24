//import ServiceCard from "../../components/ServiceCard"
import { useRef } from "react";
import ServiceCard from "../../components/ServiceCard"
import Title from "../../components/Title"
import { services } from "../../data/services"
//import icons from '../../assets/icons8-twitter-50.png'
import { motion, MotionConfig, useInView } from 'framer-motion'


function AboutMeSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {once: true});

  return (
    <motion.div className={`${isInView ? 'opacity-1' : 'opacity-0'} bg-[var(--navbar-bg)] text-white flex justify-center pb-[100px]`}
                id='about'
                ref={ref}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1}}>
      <section className="relative pt-[100px] max-w-[1350px]">
        <div className="px-[30px] sm:px-[90px] md:px-[120px] xl:px-[200px] w-full">
          <MotionConfig transition={{
                        duration: 2,
                        ease: "easeIn"
                      }}>
            <motion.div initial={{
                        x: -300,
                        opacity: 0,
                        zIndex: -20
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        zIndex: 1
                      }}
                      >
              <Title title="About Me" align="left"/>

              <div>
                <p className="text-center sm:text-left max-sm:text-[12px] font-light">
                  I am a Computer Science student at Federal University of Agriculture, Abeokuta  with over 1 year plus of experience as a Frontend Web Developer. I blend technical expertise with security knowledge to craft well-rounded web applications. I am looking to join a company that values innovation, collaboration, and continuous learning and I'm confident that my enthusiasm and drive will help me succeed in any role that leverages my passion for technology. Outside of coding, I am a Melomaniac and a Forex Trader. I continuously seek to enhance my skills and stay updated with the latest industry technologies.
                  <span className="block">Here are the languages I learnt in school :</span>
                </p>
              </div>
            </motion.div>
          

            <motion.div className="mt-5 flex justify-between sm:justify-center flex-wrap gap-4 sm:gap-7 lg:gap-10 w-full"
                        initial={{
                          x: 300,
                          opacity: 0,
                          zIndex: -20
                        }}
                        animate={{
                          x: 0,
                          opacity: 1,
                          zIndex: 1
                        }}
                        transition={{
                          duration: 2,
                          ease: "easeIn"
                        }}>
              {services.map((service, index) => (
              <ServiceCard src={service.imageSrc} progLang={service.langName} key={index}/>
              ))}
            </motion.div>
          </MotionConfig>
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
    </motion.div>
  )
}

export default AboutMeSection
